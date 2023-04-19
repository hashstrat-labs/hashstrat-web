import { Typography, Card, CardContent, Box } from "@material-ui/core"
import { utils } from "ethers"


interface InfoCardProps {
    title: string,
    value?: any,
    detailTitle?: string,
    detailValue?: number | string
    type : "amount" | "percentage" | "text"
}


export const InfoCard = ({type, title, value, detailTitle, detailValue }: InfoCardProps) => {
    console.log("detailTitle", detailTitle, "detailValue", detailValue)

    return (
        <Box style={{ maxWidth: 220, borderRadius: 12, border: "1px solid #aaa" }}>
            <Box p={3} >
                <div style={{ display:'flex', justifyContent:'center' }}> 
                    <Typography variant="body1" style={{ marginBottom: 20, fontWeight: 600 }}>{title} </Typography>
                </div>
                <div style={{ display:'flex', justifyContent:'center' }}> 
                    { value &&
                        <>
                            <Typography variant="h5" style={{ marginBottom: 20 }} color='primary'>
                            { type === 'amount' ? '$' : '' }{ type === 'text' ? value  : type === 'amount' || type === 'percentage' ? utils.commify( value ) : '' }{ type === 'percentage' ? '%' : '' }
                            </Typography>
                        </>
                    }
                </div>
                {  detailValue &&
                    <Typography variant="body2" style={{ paddingBottom: 0, paddingTop:0 }} align="center" >
                        {detailTitle}: { type === 'amount' ? '$' : '' }{ type === 'text' ? detailValue : type === 'amount' || type === 'percentage' ? utils.commify( detailValue ) : '' }{ type === 'percentage' ? '%' : '' }
                    </Typography>
                } 
            </Box>
        </Box>
    )
}