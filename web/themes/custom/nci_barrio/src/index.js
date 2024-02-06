/**
 * By importing styles here, we ensure that the styles defined in
 * the SCSS file are included in our application.
 *
 * The import statement triggers Webpack to process the main scss file and
 * apply any necessary transformations or loaders configured in the Webpack
 * configuration. Webpack's module bundling capability allows us to import
 * stylesheets directly in our JavaScript code.
 *
 * During the build process, Webpack's loaders, such as 'sass-loader' and
 * 'css-loader', interpret and compile the SCSS code into valid CSS. The
 * resulting CSS is then injected into the application at runtime, allowing the
 * styles to be applied to the corresponding HTML elements.
 */
import './index.scss';

/**
 * Import components from the ncids-js package to use in the application. These
 * auto initializing modules will wire up default dynamic features to the
 * component with default sources if applicable on DOMContentLoaded.
 *
 * Refer to the [National Cancer Institute Design System documentation](https://designsystem-dev.cancer.gov/)
 * for details on available components and their configurations.
 */

/**
 * Imports the NCI Extended Header with Mega Menu component auto initializer.
 * Note: this should output a console warning for mega menu.
 */
import '@nciocpl/ncids-js/components/nci-header/extended-with-mega-menu/auto-init';

import '@nciocpl/ncids-js/components/nci-header/extended-with-mega-menu/auto-init';

/**
 * Imports the NCI Site Alert component auto initializer.
 */
import '@nciocpl/ncids-js/components/usa-site-alert/auto-init';

/**
 * Imports the NCI Big Footer component auto initializer.
 */
import '@nciocpl/ncids-js/components/usa-footer/nci-big/auto-init';
