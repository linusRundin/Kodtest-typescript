/**
 * This file contains a basic header component
 */
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

export default function Header() {
return (
	<AppBar style={{position:"static",width:"350px"}}>
		<Typography variant="h6"
			component="div" sx={{ flexGrow: 2, backgroundColor: 'black' }}>
			Kommentarsfält
		</Typography>
	</AppBar>
);
}
