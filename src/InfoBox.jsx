import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"
export default function InfoBox({info}){
    let Rain_Url="https://images.unsplash.com/photo-1583054994298-cc68ddaca862?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Snow_Url="https://plus.unsplash.com/premium_photo-1671127303910-754ac2224c7a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Hot_Url="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <>
            <div className="infoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={info.Humidity>90?Rain_Url:info.Temperature>10?Hot_Url:Snow_Url}
                title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}&nbsp;{info.Humidity>90?<ThunderstormIcon/>:info.Temperature>10?<WbSunnyIcon />:<AcUnitIcon/>}
                </Typography>
                <Typography component="span"variant="body2" sx={{ color: 'text.secondary' }}>                    
                    <p>Weather Description :{info.Description}</p>
                    <p>Temperature :{info.Temperature}</p>
                    <p>Humidity :{info.Humidity}</p>
                    <p>Temperature_Min :{info.Temperature_Min}</p>
                    <p>Temperature_Max :{info.Temperature_Max}</p>
                    <p>Feels Like:{info.FeelsLike}</p>                
                                   
                </Typography>
                </CardContent>     
            </Card>
            </div>        
        </>
    );
}
