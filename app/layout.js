import Mainheaderbackground from '@/component/main-header/main-header-background';
import './globals.css';
import Mainheader from '@/component/main-header/main-header';
import ImageSlideshow from '@/component/images/ image-slideshow';
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Mainheaderbackground/>

        {children}
        <Mainheader/>
         <ImageSlideshow/>

      </body>
    </html>
  );
}
