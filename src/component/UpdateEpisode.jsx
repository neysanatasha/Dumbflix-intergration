import Modal from "react-modal";
import { useState } from "react";
import { FaPlus, FaRegEdit} from "react-icons/fa";

function UpdateEpisodeModal({ isOpen, closeModal }) {
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [episodeLink, setEpisodeLink] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    closeModal();
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "400px",
      border: "none",
      borderRadius: "5px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
      padding: "20px",
      background: "#4285f4",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Episode Modal"
      style={customStyles}
    >
      <h2 style={{ color: "Chartreuse", marginBottom: "20px" }}><FaRegEdit/> Edit Episode</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ color: "white", fontSize:"14px", marginBottom: "5px" }} htmlFor="title">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="episodeTitle"
            placeholder="Masukan Title"
            value={episodeTitle}
            onChange={(e) => setEpisodeTitle(e.target.value)}
            style={{ borderRadius: "5px", padding: "8px" }}
          />
        </div>
        <div className="form-group">
          <label style={{ color: "white", fontSize: "14px", marginBottom: "5px" }} htmlFor="episodeLink">
            Thumbnail Film
          </label>
          <input
            type="file"
            className="form-control"
            placeholder="asdas"
            cursor="pointer"
            id="episodeLink"
            value={episodeLink}
            onChange={(e) => setEpisodeLink(e.target.value)}
            style={{ borderRadius: "5px", padding: "8px" }}
          />
        </div>

        <div className="form-group">
          <label style={{ color: "white", fontSize: "14px", marginBottom: "5px" }} htmlFor="episodeLink">
            Link Film
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Masukan Link"
            id="episodeLink"
            value={episodeLink}
            onChange={(e) => setEpisodeLink(e.target.value)}
            style={{ borderRadius: "5px", padding: "8px" }}
          />
        </div>

        <div className="form-group">
          <label style={{ color: "white",fontSize: "14px", marginBottom: "5px" }} htmlFor="episodeLink">
            Description
          </label>
            <textarea
            type="text"
            className="form-control"
            placeholder="Deskription Film"
            id="episodeLink"
            value={episodeLink}
            onChange={(e) => setEpisodeLink(e.target.value)}
            style={{ borderRadius: "5px", padding: "8px" }}
          />
        </div>

        <button type="submit" className="btn btn-danger" style={{ marginTop: "20px" }}>
          Smit
        </button>
      </form>
    </Modal>
  );
}

export default UpdateEpisodeModal;
