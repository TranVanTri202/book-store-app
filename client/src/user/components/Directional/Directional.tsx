import "../Directional/Directional.css";
interface DirectionalProps {
  directional: string;
}
const Directional: React.FC<DirectionalProps> = ({ directional }) => {
  return (
    <>
      <div className="directional">
        <h5>Trang Chủ / {directional}</h5>
      </div>
    </>
  );
};

export default Directional;
