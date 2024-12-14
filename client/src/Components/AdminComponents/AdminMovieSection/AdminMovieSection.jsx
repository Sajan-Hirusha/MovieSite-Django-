import './MovieSection.css';
import plusMark from '../../../assets/Images/plus.png';
import deleteIcon from '../../../assets/Images/deleteIcon.png';
import editIcon from '../../../assets/Images/editIcon.png';
import AdminNavBar from "../AdminNavBar/AdminNavBar.jsx";
import Footer from "../../Footer/Footer.jsx";
import {useRef, useState} from "react";

function AdminMovieSection(props) {
    const movieModalRef = useRef(null);
    const editMovieModalRef = useRef(null);
    const categoryModalRef = useRef(null);
    const [enlargedImage, setEnlargedImage] = useState(null);
    const [movieToDelete, setMovieToDelete] = useState(null);

    const handleShowModal = (modalRef, recipient) => {
        const modalElement = modalRef.current;
        if (modalElement) {
            const modalTitle = modalElement.querySelector('.modal-title');
            const modalBodyInput = modalElement.querySelector('.modal-body input');
            modalTitle.textContent = `${recipient}`;
            if (modalBodyInput) modalBodyInput.value = recipient;
        }
    };

    const handleImageClick = (imageUrl) => {
        setEnlargedImage(imageUrl);
    };
    const handleDeleteMovie = (movieId) => {
        setMovieToDelete(movieId);
    };
    const confirmDeleteMovie = () => {
        console.log("Movie deleted:", movieToDelete);
        setMovieToDelete(null);
    };
    return (
        <div className="adminMovieSection">
            <AdminNavBar/>
            <div className="row movieSection gap-4">
                <div className="left col-7">
                    <div className="totalMovie bgImage">
                        <p>Total Movies {props.movies}</p>
                    </div>
                </div>
                <div className="right col-4">
                    <button
                        className="movieAddButton"
                        data-bs-toggle="modal"
                        data-bs-target="#addMovieModal"
                        onClick={() => handleShowModal(movieModalRef, "Add Movie")}
                    >
                        Add Movie
                        <img className="ms-5" src={plusMark} alt="plusSign"/>
                    </button>
                    <button
                        className="movieAddButton"
                        data-bs-toggle="modal"
                        data-bs-target="#addCategoryModal"
                        onClick={() => handleShowModal(categoryModalRef, "Add Category")}
                    >
                        Add Category
                        <img className="ms-5" src={plusMark} alt="plusSign"/>
                    </button>
                </div>
            </div>

            {/* Movie Modal */}
            <div className="addMovieFormModal">
                <div
                    className="modal fade"
                    id="addMovieModal"
                    tabIndex="-1"
                    aria-labelledby="addMovieLabel"
                    aria-hidden="true"
                    ref={movieModalRef}
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="addMovieLabel">Add Movie</h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="movieName" className="form-label">Movie Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="movieName"
                                            placeholder="Enter movie name"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="movieCategory" className="form-label">Movie Category</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="movieCategory"
                                            placeholder="Enter movie category"
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="movieDescription" className="form-label">Movie
                                            Description</label>
                                        <textarea
                                            className="form-control"
                                            id="movieDescription"
                                            rows="3"
                                            placeholder="Enter movie description"
                                            required
                                        ></textarea>
                                    </div>

                                    {[1, 2, 3].map(num => (
                                        <div className="col-md-4" key={`image${num}`}>
                                            <label htmlFor={`image${num}`} className="form-label">Image {num}</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id={`image${num}`}
                                                accept="image/*"
                                                required={num === 1}
                                            />
                                        </div>
                                    ))}
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save Movie
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*edit movie*/}
            <div className="editMovieFormModal">
                <div
                    className="modal fade"
                    id="editMovieFormModal"
                    tabIndex="-1"
                    aria-labelledby="addMovieLabel"
                    aria-hidden="true"
                    ref={editMovieModalRef}
                >
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="addMovieLabel">Add Movie</h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="movieName" className="form-label">Movie Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="movieName"
                                            placeholder="Enter movie name"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="movieCategory" className="form-label">Movie Category</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="movieCategory"
                                            placeholder="Enter movie category"
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="movieDescription" className="form-label">Movie
                                            Description</label>
                                        <textarea
                                            className="form-control"
                                            id="movieDescription"
                                            rows="3"
                                            placeholder="Enter movie description"
                                            required
                                        ></textarea>
                                    </div>

                                    {[1, 2, 3].map(num => (
                                        <div className="col-md-4" key={`image${num}`}>
                                            <label htmlFor={`image${num}`} className="form-label">Image {num}</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id={`image${num}`}
                                                accept="image/*"
                                                required={num === 1}
                                            />
                                        </div>
                                    ))}
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Category Modal */}
            <div className="addCategoryModal">
                <div
                    className="modal fade"
                    id="addCategoryModal"
                    tabIndex="-1"
                    aria-labelledby="addCategoryLabel"
                    aria-hidden="true"
                    ref={categoryModalRef}
                >
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="addCategoryLabel">Add Category</h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="categoryName" className="form-label">Category Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="categoryName"
                                            placeholder="Enter category name"
                                            required
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Enlargement Modal */}
            <div className="imageEnlargeModal">
                <div
                    className="modal fade"
                    id="imageEnlargeModal"
                    tabIndex="-1"
                    aria-labelledby="imageEnlargeLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content shadow-lg border-0 rounded-3">
                            <div className="modal-header border-0">
                                <h1 className="modal-title fs-4 fw-bold" id="imageEnlargeLabel">Enlarged Image</h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body d-flex justify-content-center">
                                {enlargedImage &&
                                    <img src={enlargedImage} alt="Enlarged" className="img-fluid rounded-3 shadow-lg"/>}
                            </div>
                            <div className="modal-footer border-0">
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Search Field */}
            <div className="input-group searchMovie mt-4">
                <div className="form-outline">
                    <input id="search-focus" type="search" className="form-control"/>
                    <label className="form-label" htmlFor="search-focus">Search</label>
                </div>
                <button type="button" className="btn btn-primary">
                    <i className="fas fa-search"></i>
                </button>
            </div>

            {/* Movies Table */}
            <table className="table align-middle mb-5 bg-white">
                <thead className="bg-light">
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt="Movie Thumbnail"
                                style={{width: '60px', height: '25px'}}
                                onClick={() => handleImageClick("https://mdbootstrap.com/img/new/avatars/8.jpg")}
                                data-bs-toggle="modal"
                                data-bs-target="#imageEnlargeModal"
                                className="enlargeImage"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Suffragette</p>
                                <p className="text-muted mb-0">2015</p>
                            </div>
                        </div>
                    </td>
                    <td>Drama</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>
                        <button type="button" className="btn btn-link btn-sm btn-rounded"
                                data-bs-toggle="modal"
                                data-bs-target="#editMovieFormModal"
                                onClick={() => handleShowModal(editMovieModalRef, "Edit Movie Details")}
                        >
                            <img src={editIcon} alt="editIcon" style={{width: "25px", height: "25px"}}/>
                        </button>
                        <button
                            className="btn btn-link text-danger"
                            onClick={() => handleDeleteMovie(1)}
                            data-bs-toggle="modal"
                            data-bs-target="#confirmDeleteModal"
                        >
                            <img src={deleteIcon} alt="deleteIcon" style={{width: "25px", height: "25px"}}/>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>

            {/* Confirmation Modal */}
            <div
                className="modal fade"
                id="confirmDeleteModal"
                tabIndex="-1"
                aria-labelledby="confirmDeleteLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="confirmDeleteLabel">Confirm Deletion</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this movie?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={confirmDeleteMovie}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AdminMovieSection;