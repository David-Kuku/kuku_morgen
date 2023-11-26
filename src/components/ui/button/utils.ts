import colors from "../../../utils/colors";

export const getIconSize = (iconSize?: string) => {
    switch (iconSize) {
        case 'xs':
            return 15;
        case 'sm':
            return 20;
        case 'md':
            return 24;
        case 'lg':
            return 32;
        case 'xl':
            return 36;
        default:
            return 24;
    }
};

export const buttonSize = (size: string) => {
    switch (size) {
        case 'sm':
            return 'px-3 py-2';
        case 'md':
            return 'px-6 py-3';
        case 'xs':
            return 'px-[11px] py-[2px]';
        case 'lg':
            return 'px-[30px] py-[3px]'
        default:
            return 'px-4 py-2';
    }
};


export const buttonTheme = (theme: string) => {
    switch (theme) {
        case 'primary':
            return {
                backgroundColor: colors.primary,
                color: 'white'
            };
        case 'secondary':
            return {
                backgroundColor: 'white',
                color: colors.dark,
                border: '2px solid',
                borderColor: colors.dark
            };
        case 'secondary-grey':
            return {
                backgroundColor: 'white',
                color: colors.grey08,
                border: '2px solid',
                borderColor: '#DDE1E6'
            };
        case 'danger':
            return {
                backgroundColor: colors.red,
                color: 'white'
            };
        case 'tertiary':
            return {
                backgroundColor: 'white',
                color: colors.grey,
            };
        case 'tertiary-primary':
            return {
                backgroundColor: 'white',
                color: colors.primary,
            };

        default:
            return {}
    }
};