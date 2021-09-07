import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import useGlobal from "../../../context/gitContext";

// Resolves charts dependancy
charts(FusionCharts);



export default function Bar(){
    const data = useGlobal();
    const Most = data.repos.reduce((total,index)=>{
        total.push({label:index.name,value:index.forks_count});
        return total;
    },[]).sort((a,b)=>-a.value+b.value).slice(0,5);

    const dataSource = {
        chart: {
            caption: "Most Forked",
            subcaption: "Repos",
            yaxisname: "stars",
            showvalues: "1",
            theme: "fusion",
            BaseFontSize:'10px'
        },
        data: Most
        };

    return (
        <div className="bars">
        <ReactFusioncharts
            type="bar3d"
            width="100%"
            dataFormat="JSON"
            dataSource={dataSource}
        />
    </div>
    );
}