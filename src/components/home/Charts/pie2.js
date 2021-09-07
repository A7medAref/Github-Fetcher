import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import useGlobal from "../../../context/gitContext";

// Resolves charts dependancy
charts(FusionCharts);



export default function Donate(){
    const data = useGlobal();
    let Most = data.repos.reduce((total,item)=>{
        const language = item.language;
        if(language === null)return total;
        if(!total[language])
        {
            total[language] = {label:language,value:item.stargazers_count};
            return total;
        }
        else
        {
            total[language] = {label:language,value:total[language].value+item.stargazers_count};
            return total;
        }
    },{});
    Most = Object.values(Most).slice(0,5);
    const dataSource = {
        chart: {
            caption: "stars per language",
            enablesmartlabels: "1",
            showlabels: "1",
            usedataplotcolorforlabels: "1",
            plottooltext: "$label, <b>$value</b> MMbbl",
            theme: "fusion",
            outCnvBaseFontSize:'12px'
        },
        data: Most
        };
    return (
        <div className="pie">
        <ReactFusioncharts
            type="doughnut3d"
            width="100%"
            dataFormat="JSON"
            dataSource={dataSource}
        />
    </div>
    );
}