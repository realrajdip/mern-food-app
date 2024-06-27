import { useEffect,useState } from "react";
import { ClipLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        {loading ? (
          <ClipLoader />
        ) : (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-center">Order Successfull!</h2>
            <p>Your has been successfully placed.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Success;
