import {useEffect, useRef, useState} from "react";

function DimensionProvider(WrappedComponent) {
	return function DimensionedComponent(props) {
		const containerRef = useRef();
		const [dimensions, setDimensions] = useState({width: 0, height: 0});

		useEffect(() => {
			function updateDimensions() {
				if (containerRef.current) {
					const { offsetWidth, offsetHeight } = containerRef.current;
					setDimensions({ width: offsetWidth, height: offsetHeight });
				}
			}

			// Actualiza las dimensiones al montar el componente
			updateDimensions();

			// Actualiza las dimensiones cada vez que cambia el tamaño de la ventana
			window.addEventListener('resize', updateDimensions);

			// Limpia el evento al desmontar el componente
			return () => {
				window.removeEventListener('resize', updateDimensions);
			};
		}, []);

		return (
			<div className={'123333'} ref={containerRef} style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center' }}>
				<WrappedComponent {...props} dimensions={dimensions}/>
			</div>
		);
	};
}

export default DimensionProvider;
