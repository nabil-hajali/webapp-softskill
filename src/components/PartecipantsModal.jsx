export default function PartecipantsModal({ participant, onClose }) {


    return (
        <section>
            <div className="container">
            
                <div className="modal fade show d-block bg-black bg-opacity-75" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {participant.firstName} {participant.lastName}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={onClose}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    <strong>Phone:</strong> {participant.phone}
                                </p>
                                <p>
                                    <strong>Fiscal Code:</strong> {participant.fiscalCode}
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={onClose}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>

    )
}


