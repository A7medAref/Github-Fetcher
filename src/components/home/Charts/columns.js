import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import useGlobal from "../../../context/gitContext";

// Resolves charts dependancy
charts(FusionCharts);



export default function Columns(){
    const data = useGlobal();
    const Most = data.repos.reduce((total,index)=>{
        total.push({label:index.name,value:index.watchers_count});
        return total;
    },[]).sort((a,b)=>-a.value+b.value).slice(0,5);

    const dataSource = {
        chart: {
            caption: "Most Popular",
            subcaption: "Repos",
            yaxisname: "stars",
            decimals: "1",
            theme: "fusion",
            outCnvBaseFontSize:'12px'
        },
        data:Most
        };
    return (
        <div className="bars">
            <ReactFusioncharts
                className="bars_inside"
                type="column3d"
                width="100%"
                dataFormat="JSON"
                dataSource={dataSource}
            />
        </div>
    );
}
