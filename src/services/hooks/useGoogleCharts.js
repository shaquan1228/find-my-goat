import { useEffect, useState } from "react";

function useGoogleCharts() {
    const [google, setGoogle] = useState(null);


    const ensureScriptIsLoaded = () => {
        if (window.google && window.google.charts) {
            window.google.charts.load('current', { 'packages': ['corechart'] });

            window.google.charts.setOnLoadCallback(() => setGoogle(window.google))
        }
    };
    useEffect(() => {

        if (!google) {
            const head = document.head;
            let script = document.getElementById('googleChartsScript');
            console.log(window.google);
            if (!script) {
                script = document.createElement('script');
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.id = 'googleChartsScript';
                script.onload = ensureScriptIsLoaded;
                head.appendChild(script);
            } else if (window.google && window.google.charts && window.google.visualization) {
                setGoogle(window.google);
            } else {
                script = document.createElement('script');
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.id = 'googleChartsScript';

                script.onload = ensureScriptIsLoaded;
                head.appendChild(script);
            }

            return () => {
                let script = document.getElementById('googleChartsScript');
                if (script) { script.remove(); }
            }
        }
    }, [google]);

    return google;
}

export default useGoogleCharts;



