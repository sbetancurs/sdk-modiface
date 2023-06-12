const domain = window.location.hostname;
const portNumber = window.location.port;
const { pathname } = window.location;

window.MFE_VTO.init({
    config: {
        // libraryInfo object could be configured alternatively
        // based on your library hosting location. Example:
        libraryInfo: {
            domain: 'mf-web-cdn.modiface.com',
            path: '/retailersdk-web/8.7.2/makeupExample/integratedDemo/',
            version: '',
            maskPrefix: 'https://d3bu57wgd5zjfz.cloudfront.net/cmswebservice-linux/production/data/mask_images/cross/',
            assetPrefix: 'https://mf-web-cdn.modiface.com/libmfelivemakeup-web/lite-2.1.8/dist/assets/',
            width: 480,
            height: 640,
        },
        moduleMode: 'Makeup',
    },
});
