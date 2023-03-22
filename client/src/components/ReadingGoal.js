import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Modal from './Modal';
// import { ADD_USER } from "../../utils/"
// import { UPDATE_GOAL } from "../../utils/mutations";

{/*will have to import the queries for reading goal number and reading goal date */}

import '../assets/css/fonts.css';
const styles = {
    main: {
        backgroundColor: '#73557D',
        color: 'white',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontFamily: 'Italiana',
    },
    title: {
        fontFamily: 'Italianno',
        fontSize: '3rem',
    },
    bookNumber: {
        fontSize: '3rem',
    },
    bookDate: {
        fontSize: '2.5rem',
    },
    button: {
        fontFamily: 'Italianno',
        color: 'white',
    }
}

export default function ReadingGoal() {
    // const [updateGoal] = useMutation(UPDATE_GOAL);

    const saveGoal = async (event) => {
        event.preventDefault();
       let myDate= Date.parse(formState.goalDate);
       console.log(typeof myDate, myDate);
        const mutationResponse = await addUser({
          variables: {
            bookGoal: parseInt(formState.bookGoal),
            goalDate: formState.goalDate,
          },
        });
        const token = mutationResponse.data.updateUser.token;
        Auth.login(token);
        <Link to="/profile"></Link>;
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    const goal = 'New Goal'
    const title = 'New Reading Goal:'
    const add = 'Add Goal'
     
    const modalInfo = () =>{
        return(
            <>
                <form onSubmit={saveGoal}>
                    <p>
                        How many books do you want to read?
                    </p>
                    <input
                        placeholder="#"
                        name="bookGoal"
                        type="number"
                        id="bookGoal"
                        onChange={handleChange}
                    />
                    <p>
                        When do you want to reach your goal?
                    </p>
                    <input
                        placeholder="YYYY-MM-DD"
                        name="goalDate"
                        type="Date"
                        id="goalDate"
                        onChange={handleChange}
                    />
                </form>
            </>
        )
    }
    return(
        <>
            <div style={styles.main} className='w-4/12 px-10 py-8 mt-12'>
                <h1 style={styles.title}>Reading Goal:</h1>
                {/* this syntax will most likely need to be changed once the queries are made */}
                    <div className='py-2 pb-2'>
                    {/* reading goal number query */}
                    <h2 style={styles.bookNumber}>
                        books</h2>
                    {/* reading goal date query */}
                    <h2 style={styles.bookDate}>by</h2>
                    </div>
                {/*on click, have the 'new reading goal' modal pop up*/}
                <button style={styles.button} className="bg-vdarkPurple text-white hover:bg-medPurple font-bold text-md px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    <Modal 
                    buttonName={goal} 
                    modalTitle={title} 
                    modalFunction={add}
                    modalInformation={modalInfo}
                    // onClickInfo={saveGoal}
                    />
                </button>
            </div>
        </>
    )
}
