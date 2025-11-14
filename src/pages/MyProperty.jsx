import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import { TbCurrencyTaka } from "react-icons/tb";

const MyProperties = () => {
  const { user } = useAuth();
  const [MyProperties, setMyProperties] = useState(null);

  useEffect(() => {
    fetch(
      `https://nestora-server-api.vercel.app/properties?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyProperties(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.email]);

  if (MyProperties === null) {
    return <Loader></Loader>;
  }

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://nestora-server-api.vercel.app/properties/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = MyProperties.filter((data) => data._id !== id);
              setMyProperties(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto sec-gap">
      <div className="text-center space-y-2 mb-10">
        <h1 className="heading font-heading">My Properties</h1>
        <p>Manage your property listings in one place</p>
        <p className="text-sm text-gray-500">
          View, update, or delete your properties as needed
        </p>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {MyProperties.length !== 0 ? (
          <>
            {MyProperties.map((property) => (
              <div
                key={property._id}
                className="bg-white rounded-lg shadow-lg p-3 transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {property.name}
                </h3>
                <p className="text-sm text-gray-600">{property.propertyType}</p>
                <p className="mt-2 text-lg font-bold text-green-600 flex items-center">
                  <TbCurrencyTaka className='text-xl' />  {property.price}
                </p>
                <p className="text-sm text-gray-500">{property.location}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(property.createdAt).toLocaleDateString()}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <Link
                    to={`/details/${property._id}`}
                    className="btn btn-sm  btn-secondary text-white hover:underline text-sm"
                  >
                    View Details
                  </Link>

                  <div className="flex space-x-2">
                    <Link
                      to={`/update/${property._id}`}
                      className="hover:cursor-pointer border p-1 rounded text-yellow-500 hover:text-yellow-400 text-sm"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleRemove(property._id)}
                      className="hover:cursor-pointer border p-1 rounded text-red-500 hover:text-red-400 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="grid col-span-1 md:col-span-2 lg:col-span-3">
            <h1 className="text-3xl font-semibold text-center">
              You have no properties.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProperties;
