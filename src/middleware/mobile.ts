export default defineNuxtRouteMiddleware(() => {
    const device = useDevice();
    if (device.isMobileOrTablet) {
        return navigateTo("/mobile");
    }
});
