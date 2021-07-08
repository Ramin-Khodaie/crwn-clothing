import HomeIcon from './homeicon'
import ShopIcon from './shop';
import LoginIcon from './login';
import LogoutIcon from './logout';
export default function DrawerIcons(props) {

    let Icon = null;
    switch (props.icon) {

        case "Home":
            Icon = <HomeIcon />;
            break;
        case "Shop":
            Icon = <ShopIcon />;
            break;
        case "login":
            Icon = <LoginIcon />;
            break;
        case "logout":
            Icon = <LogoutIcon />;
            break;
    }

    return Icon;
}