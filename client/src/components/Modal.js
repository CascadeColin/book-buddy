import React from "react";

const styles = {
    main: {
        fontFamily: 'Italiana'
    },
    button: {
        fontFamily: 'Italianno',
        color: 'white',
    }
}

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        style={styles.button}
        type="button"
        onClick={() => setShowModal(true)}
      >
        {props.buttonName}
      </button>
      {showModal ? (
        <>
          <div style={styles.main}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-vdarkPurple text-3xl font-semibold">
                    {/* MODAL TITLE */}
                    {props.modalTitle}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {/* MODAL INFORMATION (MAIN BODY) */}
                    {props.modalInformation}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-brightPurple background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-medPurple text-white hover:bg-vdarkPurple font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {/* FINAL BUTTON (SAVE INFORMATION?) does this need to be a submit? */}
                    <h1
                    onClick={() => {props.onClickInfo}}
                    >{props.modalFunction}</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}