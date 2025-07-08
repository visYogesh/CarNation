const CarSheetEmbed = () => {
  return (
    <>
      <div className="text-center text-purple-500 font-bold text-2xl py-4">
        <h1>Car Nation elite, cars for sale</h1>
      </div>
      <div className="w-full bg-purple-800 flex items-center justify-center p-1">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRthxPufooDCeyPS763hTh-ji6-fjrYvkCtU28nDXtN74NZ447fV4Jqvpg0aVv-BomRF8eJPyl5GVHf/pubhtml?widget=true&headers=false"
            width="100%"
            height="350"
            style={{
              border: "none",
              borderRadius: "12px",
              overflow: "hidden",
            }}
            title="Car Listings - Carnation Elite"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default CarSheetEmbed;
