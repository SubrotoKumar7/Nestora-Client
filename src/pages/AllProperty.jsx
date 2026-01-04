import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../components/skeletons/CardSkeletons";

const AllProperty = () => {
  const axiosInstance = useAxios();

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("none");

  const {
    data = {},
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["all-property", currentPage, sort],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/properties?page=${currentPage}&limit=${limit}&sort=${sort}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const propertiesData = data.data || [];
  const totalPages = data.totalPages || 1;


  const filteredProperties = propertiesData.filter(
    (property) =>
      property.name?.toLowerCase().includes(search.toLowerCase()) ||
      property.description?.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, sort]);

  return (
    <div className="w-11/12 mx-auto sec-gap">
      <div className="text-center space-y-2 mb-10">
        <h1 className="heading font-heading">
          Explore Exclusive Real Estate Listings
        </h1>
        <p>
          Handpicked properties with premium amenities, modern architecture, and
          unbeatable locations — find your next investment today.
        </p>
      </div>

      <div className="flex flex-row justify-between items-center gap-5">
        <input
          type="search"
          placeholder="Search Properties ....."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[60%] px-6 py-2 rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <select
          onChange={(e) => setSort(e.target.value)}
          className="select"
        >
          <option value="none">Default Sort</option>
          <option value="low2high">Low to High (Price)</option>
          <option value="high2low">High to Low (Price)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-7">
        {isLoading || isFetching ? (
          [...Array(limit)].map((_, i) => <CardSkeleton key={i} />)
        ) : filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Card key={property._id} property={property} />
          ))
        ) : (
          <div className="col-span-full my-[10vh] text-center text-3xl font-semibold">
            No Properties Found
          </div>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <div className="join">
          <button
            className="join-item btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>

          {[...Array(totalPages).keys()].map((n) => {
            const page = n + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`join-item btn ${
                  currentPage === page ? "btn-active btn-primary" : ""
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            className="join-item btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProperty;
