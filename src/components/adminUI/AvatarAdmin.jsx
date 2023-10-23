import adminImage from '../../assets/Admin-50.png';

export default function AvatarAdmin({ className = 'h-12 mt-1', src }) {
    const adminClass = 'rounded-full aspect-square';
    const classes = adminClass + ' ' + className;

    return (
        <img
            src={src || adminImage}
            alt='AdminHotel'
            className={classes}
        />
    )
}
