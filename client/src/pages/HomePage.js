
import Signup from "../components/Signup";
import Login from "../components/Login";

const styles = {
  bgColor: {
    backgroundColor: "#FCF3EB",
  },
  fontCursive: {
    fontFamily: "Italianno",
    fontSize: "1.5rem",
    position: "relative",
    top: "10px",
    right: "8px",
  },
  tab: {
    fontFamily: "Italianno",
    fontSize: "2.5rem",
    position: "relative",
    top: "-19px",
    left: "8px",
  },
};

export default function HomePage() {
  return (
    <div style={styles.bgColor}>
      <div className="flex flex-row justify-center pt-5 ">
        <Login />
        <Signup />
      </div>
    </div>
  );
}
