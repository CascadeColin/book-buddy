const jwt = require("jsonwebtoken");

const secret = "mysupersecretsssooosss"
const exp = "6h"

module.exports = {
    authMiddleware: function ({ req }) {
        let token =req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization){
            token = token.split(" ").pop().trim();
        }

        if (!token){
            return req;
        }

        try {
            const {data} = jwt.verify(token , secret, {maxAge:exp});
            req.user = data;
        } catch {
            console.log("Not A Valid Token!")
        }

        return req;
    },
    signToken: function ({email, username, _id} ) {
        const payload = { email, username, _id};
        return jwt.sign({data:payload}, secret, {expiresIn:exp})
    }
}