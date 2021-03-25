import PulseLoader from "react-spinners/PulseLoader";

function Spinner({ loading }) {

	return (
		<div className="sweet-loading">
			<PulseLoader color={'rgba(0,0,0, .5)'} loading={loading} size={9} />
		</div>
	);
}

export default Spinner;