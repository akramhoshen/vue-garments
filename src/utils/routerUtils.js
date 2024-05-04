import { useRouter } from 'vue-router';

// Custom capitalize Function
function capitalize(str) {
    // return str.charAt(0).toUpperCase() + str.slice(1);
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function getCurrentPath() {
    const router = useRouter();
    const currentPath = window.location.pathname;

    // matched with route
    const matchedRoute = router.resolve(currentPath);
    
    // Get matched route name
    const routeName = matchedRoute.name;
    
    //Call Capitalize Function
    const capitalizedRouteName = capitalize(routeName);

    // Return route name
    return capitalizedRouteName;
}

  