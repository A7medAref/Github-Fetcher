import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import useGlobal from "../../../context/gitContext";

// Resolves charts dependancy
charts(FusionCharts);



export default function Pie (){
    const data = useGlobal();
    let languages = data.repos.reduce((total,item)=>{
        const language = item.language;
        if(language === null)return total;
        if(!total[language])
        {
            total[language] = {label:language,value:1};
            return total;
        }
        else
        {
            total[language] = {label:language,value:total[language].value+1};
            return total;
        }
    },{});
    languages = Object.values(languages).slice(0,5);
    const total = languages.reduce((iterator,item)=>iterator+=item.value,0);
    languages.forEach(i=>{i.value=((i.value/total)*100).toFixed(2)});
    // console.log(languages);
    const dataSource = {
        chart: {
            caption: "Languages",
            subcaption: "Repos languages",
            pieRadius:"50%",
            numberprefix: "%",
            theme: "fusion",
            baseFontSize:'12px',
            bold:true
        },
        data:languages,
        };
    return (
        <div className="pie">
            <ReactFusioncharts
                width="100%"
                type="pie3d"
                dataFormat="JSON"
                dataSource={dataSource}
            />
        </div>
    );
}
