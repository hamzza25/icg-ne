import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";
function MasterBatch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["masterbatch", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=masterbatch`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
          },
        }
      );
      return data.data.data;
    },
  });

  // Function to handle page change
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > data.totalPages) return;
    setSearchParams({ page: newPage, limit });
    setPage(newPage);
  };

  return (
    <div className="min-h-screen dark:bg-background-dark">
      <div className="container mx-auto px-6 lg:px-16 py-10">
        <div
          className="relative m-auto h-[419px] bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/mast.png')` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#010101] opacity-20 rounded-xl"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h3 className="text-4xl text-white"> Master Batch</h3>
          </div>
        </div>

        {/* Below Content */}
        <div className="pt-8 leading-loose">
          <div className="pt-8 pb-6">
            <h3 className="text-3xl font-bold pb-4 text-[#023B3B] dark:text-white">
              Masterbatches
            </h3>
            <p className="pt-6 dark:text-gray-300">
              Masterbatches are essential additives used in the plastics and
              polymer industries to impart color, enhance properties, and optimize
              processing. ICG Specialty Chemicals offers a wide range of
              masterbatches tailored for specific industrial applications,
              delivering unmatched quality and consistency. Our masterbatch
              products are designed to enhance durability, improve aesthetic
              appeal, and optimize performance, making them indispensable for
              manufacturers across a variety of industries.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              Key Masterbatch Products
            </h3>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              1. Liquid/Paste Black Masterbatch
            </h3>
            <p className=" dark:text-gray-300">
              Liquid/Paste Black Masterbatch is a concentrated colorant formulated
              for easy dispersion into a variety of plastic resins. This product
              offers superior color consistency and is ideal for applications that
              require deep, rich black tones with minimal usage levels. Its paste
              form makes it convenient to mix directly into liquid or semi-liquid
              processing environments.
            </p>
            <h3 className="text-xl font-semibold px-4 p-2 dark:text-white">Key Benefits:</h3>
            <ul className="list-[circle] list-inside space-y-4 p-4 dark:text-gray-300">
              <li>Excellent dispersion and coverage.</li>
              <li>High pigment concentration, allowing lower dosages.</li>
              <li>
                Suitable for injection molding, extrusion, and film applications.
              </li>
              <li>Provides UV resistance, enhancing outdoor weatherability.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              2. Black Masterbatch
            </h3>
            <p className=" dark:text-gray-300">
              Black Masterbatch is a versatile, solid concentrate of carbon black
              pigments designed for efficient and uniform coloring of plastic
              materials. It provides excellent opacity, UV stability, and
              mechanical performance enhancement. Black masterbatch by ICG
              Specialty Chemicals is specifically formulated to meet the stringent
              demands of sectors that require robust coloration with added
              strength and protection.
            </p>
            <h3 className="text-xl font-semibold px-4 p-2 dark:text-white">Key Benefits:</h3>
            <ul className="list-[circle] list-inside space-y-4 p-4 dark:text-gray-300">
              <li>High opacity and color strength, reducing usage rates.</li>
              <li>Exceptional UV resistance, protecting against weathering.</li>
              <li>Enhances mechanical properties like tensile strength.</li>
              <li>
                Heat-resistant, making it suitable for high-temperature
                applications.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              3.Moisture Absorber (AB)
            </h3>
            <p className=" dark:text-gray-300">
              Moisture Absorber (AB) masterbatch is engineered to effectively
              remove excess moisture from recycled or virgin polymers during
              processing. It ensures improved product quality by preventing
              moisture-related defects like voids, bubbles, and surface blemishes
              in plastic parts. This masterbatch is essential for improving the
              processing efficiency of hygroscopic materials, reducing downtime,
              and ensuring consistent output.
            </p>
            <h3 className="text-xl font-semibold px-4 p-2 dark:text-white">Key Benefits:</h3>
            <ul className="list-[circle] list-inside space-y-4 p-4 dark:text-gray-300">
              <li>Absorbs excess moisture from resins, reducing defects.</li>
              <li>
                Improves the quality of finished products by preventing splay and
                streaking.
              </li>
              <li>Enhances mechanical properties and surface finish.</li>
              <li>Cost-effective solution for processing recycled materials.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#023B3B] dark:text-white">
              Key Industries of Nucleacting Agents:
            </h3>
            <ul className="list-disc list-inside space-y-4 py-4 dark:text-gray-300">
              <li>Automotive:</li>
              <li>Packaging:</li>
              <li>Construction</li>
              <li>Electronics:</li>
              <li>Recycling</li>
            </ul>
          </div>

          {/* Products */}
          <div className="px-20 pb-10">
            <div className="flex justify-between pt-10 pb-10">
              <h3 className="text-3xl font-bold text-[#8AA823]">Products</h3>
              <button
                className="flex justify-around items-center border-[2px] border-[#8AA823] w-[138px] h-[47px] rounded dark:text-[#8AA823]"
                onClick={() => {
                  setLimit(limit + 100);
                  setSearchParams({ page: page, limit: limit + 100 });
                  // queryClient.invalidateQueries(["uvabsorbers"]);
                }}
              >
                View All <FaArrowRightLong className="text-[#8AA823]" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data?.products?.map((product, index) => (
                <a href={`/available-stocks/${product._id}`} key={product._id}>
                  <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm text-center dark:bg-gray-800 dark:border-gray-700">
                    <h4 className="font-semibold text-lg mb-2 dark:text-white">{product.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{product.cas_no}</p>
                  </div>
                </a>
              ))}
            </div>

            {data?.products?.length === 0 && (
              <div className="flex justify-center items-center mt-10">
                <p className="text-2xl font-semibold dark:text-gray-300">No Products Found</p>
              </div>
            )}

            {/* Pagination Controls */}
            {data && data.totalPages > 1 && (
              <div className="flex justify-center items-center mt-10 gap-4">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className="px-4 py-2 bg-[#8AA823] text-white rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <span>
                  Page {page} of {data.totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === data.totalPages}
                  className="px-4 py-2 bg-[#8AA823] text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterBatch;
