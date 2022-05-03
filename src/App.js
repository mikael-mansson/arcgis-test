import { useEffect, useRef } from 'react';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

export default function App() {
    const mapRef = useRef(null);
    useEffect(() => {
        if (mapRef.current) {
            const map = new ArcGISMap({
                basemap: 'streets-vector',
            });
            const view = new MapView({
                map,
                container: mapRef.current,
            });
        }
    }, []);
    return (
        <div className="App">
            <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
        </div>
    );
}
