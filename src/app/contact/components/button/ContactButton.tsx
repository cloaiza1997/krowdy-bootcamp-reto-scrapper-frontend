import React from "react";

function ContactButton(props: any) {
  return (
    <>
      <button
        type="button"
        className="btn bg-success bg-opacity-10 float-end m-3 shadow"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Desarrollado por Cristian Loaiza
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Desarrollado por</h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <span>Cristian Loaiza</span>
              <br />
              <a
                href="https://www.linkedin.com/in/cristian-andrés-loaiza-arias-375a82140/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactButton;
