/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import { axiosInstance } from "../../axios"; // Using axios instance for consistent API calls
import { BiSearchAlt2 } from "react-icons/bi";
import { useForm } from "react-hook-form";

const API_URL = "/products";

function FindProductSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]); // All fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // Matched products based on search and filters
  const [selectedIndustry, setSelectedIndustry] = useState("select industries");
  const [selectedChemicalSolution, setSelectedChemicalSolution] =
    useState("select category");
  const [showModal, setShowModal] = useState(false); // State to show the modal
  const [modalType, setModalType] = useState(""); // Type to identify which modal to show (Safety/Technical/Brochure)
  const navigate = useNavigate();

  // React Hook Form for email input
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Fetch all products on component load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(API_URL, {
          params: { page: 1, limit: 50 }, // Required parameters
        });
        if (response.status === 200) {
          setProducts(response.data?.data?.products || []); // Save all fetched products
        } else {
          console.error(`Unexpected status code: ${response.status}`);
        }
      } catch (err) {
        console.error("Error fetching products:", err.message);
      }
    };

    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    const term = event.target.value.trim().toLowerCase();
    setSearchTerm(term);
    filterProducts(term, selectedIndustry, selectedChemicalSolution);
  };

  // Handle industry selection change
  const handleIndustryChange = (event) => {
    const industry = event.target.value.toLowerCase(); // Convert to lowercase
    setSelectedIndustry(industry);
    filterProducts(searchTerm, industry, selectedChemicalSolution);
  };

  // Handle chemical solution selection change
  const handleChemicalSolutionChange = (event) => {
    const chemicalSolution = event.target.value.toLowerCase(); // Convert to lowercase
    setSelectedChemicalSolution(chemicalSolution);
    filterProducts(searchTerm, selectedIndustry, chemicalSolution);
  };

  // Filter products based on search term, industry, and chemical solution
  const filterProducts = (term, industry, chemicalSolution) => {
    let matchedProducts = products;

    // Filter by search term (only if search term is not empty)
    if (term) {
      matchedProducts = matchedProducts.filter((p) =>
        p.name?.toLowerCase().includes(term)
      );
    } else {
      // If search term is empty, show no products
      matchedProducts = [];
    }

    // Filter by selected industry (if not "select industries")
    if (industry !== "select industries") {
      matchedProducts = matchedProducts.filter(
        (p) => p.category_name?.toLowerCase() === industry
      );
    }

    // Filter by selected chemical solution (if not "select category")
    if (chemicalSolution !== "select category") {
      matchedProducts = matchedProducts.filter(
        (p) => p.chemical_name?.toLowerCase() === chemicalSolution
      );
    }

    setFilteredProducts(matchedProducts);
  };

  // Function to handle modal form submission
  const onSubmit = (data) => {
    console.log("Email submitted:", data.email);
    // You can implement the actual logic to send the email request here
    setShowModal(false); // Close the modal after submission
    reset(); // Reset the form
  };

  const handleLinkClick = (type) => {
    setModalType(type); // Set the modal type to either 'Safety', 'Technical', or 'Brochure'
    setShowModal(true); // Show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  console.log(products);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[541px] py-[34px] flex justify-center items-center px-[20px] bg-background-light dark:bg-background-dark"
      style={{ backgroundImage: "url('/assets/greenflex.png')" }}
    >
      <div className="bg-white dark:bg-gray-800 py-[34px] px-[20px] sm:px-[50px] shadow-[0px_9px_21px_rgba(0,_0,_0,_0.07)] rounded-[10px] max-w-full sm:max-w-[70%] w-full flex flex-col items-center">
        <div className="text-[#023b3b] dark:text-white text-[34.5px] font-bold leading-[42.56px] text-center">
          Find a Product
        </div>

        {/* Search bar container */}
        <div className="flex mt-8 w-full items-center justify-center">
          <div className="flex items-center w-full sm:w-3/5 border rounded-lg bg-white dark:bg-gray-700">
            <span className="px-3">
              <BiSearchAlt2 color="#a6ce39" size={24} />
            </span>
            <input
              className="w-full px-3 py-2 outline-none bg-transparent text-black dark:text-white"
              type="text"
              placeholder="Search for products, grades or codes"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Display filtered products */}
        {filteredProducts.length > 0 && (
          <div className="search-result-container bg-slate-200 dark:bg-gray-700 p-4 rounded-lg mt-4 w-full sm:w-3/5 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProducts.map((product) => (
                <Link
                  key={product._id}
                  to={`/available-stocks/${product._id}`} // Link to ProductDetails page with product ID
                  className="flex flex-col w-full border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg p-4 bg-white dark:bg-gray-800"
                  style={{ aspectRatio: "1 / 1" }} // Making each card square
                >
                  {/* Image Container */}
                  <div className="bg-white dark:bg-gray-700 rounded-t-lg overflow-hidden flex-grow">
                    <img
                      src={product.banner}
                      alt={product.name}
                      className="w-full h-32 object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="py-4 text-center">
                    <h3 className="text-lg font-semibold mt-2 text-black dark:text-white">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {product.chemical_name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Show message if no product matches */}
        {searchTerm && filteredProducts.length === 0 && (
          <div className="text-center mt-4 text-gray-500 dark:text-gray-300">
            No product found matching "{searchTerm}".
          </div>
        )}

        {/* Dropdown container */}
        <div className="flex flex-col sm:flex-row justify-between w-full gap-[10px] mt-[20px]">
          <div className="flex-1 flex flex-col">
            <label
              className="text-[#333] dark:text-white font-bold mb-[5px]"
              htmlFor="industries"
            >
              Industries
            </label>
            <select
              className="text-[#333] dark:text-white font-bold mb-[5px] border p-2 bg-white dark:bg-gray-700"
              id="industries"
              value={selectedIndustry}
              onChange={handleIndustryChange}
            >
              <option value="select industries">Select industries</option>
              <option value="automotive">Automotive</option>
              <option value="printing and packaging">
                Printing and Packaging
              </option>
              <option value="agriculture, feed, and food">
                Agriculture, Feed, and Food
              </option>
              <option value="electronics">Electronics</option>
              <option value="personal and home care">
                Personal and Home Care
              </option>
              <option value="adhesives and sealants">
                Adhesives and Sealants
              </option>
              <option value="paints and coating">Paints and Coating</option>
              <option value="building and construction">
                Building and Construction
              </option>
              <option value="medical and pharmaceutical">
                Medical and Pharmaceutical
              </option>
            </select>
          </div>
          <div className="flex-1 flex flex-col ">
            <label
              className="text-[#333] dark:text-white font-bold mb-[5px]"
              htmlFor="solutions"
            >
              Chemical Solutions
            </label>
            <select
              className="text-[#333] dark:text-white font-bold mb-[5px] border p-2 bg-white dark:bg-gray-700"
              id="solutions"
              value={selectedChemicalSolution}
              onChange={handleChemicalSolutionChange}
            >
              <option value="select category">Select category</option>
              <option value="antioxidants">Antioxidants</option>
              <option value="uv-absorbers">UV-absorbers</option>
              <option value="flame retardants">Flame retardants</option>
              <option value="optical brightners">Optical Brightners</option>
              <option value="pigments and dyes">Pigments and Dyes</option>
              <option value="hals">HALS</option>
              <option value="antiblocks">Antiblocks</option>
              <option value="polymers and resins">Polymers and Resins</option>
              <option value="plasticizers">Plasticizers</option>
              <option value="nucleating agent">Nucleating Agent</option>
              <option value="polymer processing additives">
                Polymer Processing Additives
              </option>
              <option value="masterbatches">Masterbatches</option>
            </select>
          </div>
        </div>

        <div className="text-center mt-[30px] text-black dark:text-white text-[16px]">
          Looking for other resources? Select an item below.
        </div>

        <div className="flex flex-wrap justify-center gap-[10px] mt-[20px]">
          <div
            className="text-[#023b3b] dark:text-white text-[16px] font-bold cursor-pointer"
            onClick={() => handleLinkClick("technical")}
          >
            Technical Data Sheets
          </div>
          <div
            className="text-[#023b3b] dark:text-white text-[16px] font-bold cursor-pointer"
            onClick={() => handleLinkClick("safety")}
          >
            Safety Data Sheets
          </div>
          <div
            className="text-[#023b3b] dark:text-white text-[16px] font-bold cursor-pointer"
            onClick={() => handleLinkClick("brochure")}
          >
            Product Brochures
          </div>
        </div>

        <div
          className="mt-[30px] py-[10px] px-[20px] border border-[#a6ce39] rounded-[5px] cursor-pointer text-center bg-white dark:bg-gray-800 transition-all duration-300 hover:bg-[#8aa823] hover:text-white"
          onClick={() => navigate("/product-finder")}
        >
          <div className="view-all-text text-black dark:text-white">
            View All Products
          </div>
        </div>
      </div>

      {/* Modal for email submission */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 dark:text-white"
            >
              &times;
            </button>
            <div className="text-center text-xl font-semibold text-black dark:text-white mb-4">
              {modalType === "technical"
                ? "Request Technical Data Sheet"
                : modalType === "safety"
                ? "Request Safety Data Sheet"
                : "Download Product Brochure"}
            </div>
            {modalType === "brochure" ? (
              <div className="flex flex-col items-center">
                <button
                  className="bg-[#a6ce39] text-white py-2 px-4 rounded-lg hover:bg-[#8aa823] transition-all"
                  onClick={() => {
                    // Implement download logic here
                    console.log("Downloading brochure...");
                    closeModal();
                  }}
                >
                  Download Brochure
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <input
                  type="email"
                  {...register("email", { required: "Email is required", pattern: /^[^@]+@[^@]+\.[^@]+$/i })}
                  placeholder="Enter your email"
                  className="px-4 py-2 mb-4 border rounded-lg bg-transparent text-black dark:text-white"
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                <button
                  type="submit"
                  className="bg-[#a6ce39] text-white py-2 px-4 rounded-lg hover:bg-[#8aa823] transition-all"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default FindProductSection;