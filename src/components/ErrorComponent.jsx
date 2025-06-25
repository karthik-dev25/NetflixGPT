const ErrorComponent = () => {
  return (
    <div className="bg-black text-white h-screen flex justify-center">
      <div className="w-1/2 mx-auto absolute mt-[20%]">
        <h1 className="text-3xl text-red-700">500 Internal Server Error</h1>
        <h1 className="text-md my-2">
          TMDB is currently blocked on the Jio network. If you're a Jio user,
          you may not be able to access the site or its API. Please try
          switching to a different internet provider or use a VPN to access the
          content.
        </h1>
      </div>
    </div>
  );
};

export default ErrorComponent;
