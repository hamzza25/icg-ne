import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Navbar from "./ui/header/Navbar";
import Footer from "./ui/footer/Footer";
import MediaPage from "./features/media/media-and-news/MediaAndNewsPage";
import BlogsAndArticles from "./features/media/blogs-and-articles/BlogsAndArticles";
import Blog from "./features/media/blogs-and-articles/Blog";
import MediaText from "./features/media/media-and-news/MediaText";
import MediaEvents from "./features/media/media-and-news/MediaEvents";
import Contact from "./features/Contact/Contact";
import ICGCareer from "./features/Jobs/ICGCareer";
import Career from "./features/Jobs/Career";
import Gallery from "./features/media/gallery/Gallery";
import Home from "./ui/home-screen/Home";
import IcgMarketTemplate from "./product-and-solutions/icg-market/IcgMarketTemplate";
import IcgLayout from "./product-and-solutions/icg-market/IcgLayout";
import ProductDetail from "./features/our-company/available-stocks/ProductDetail";
import AvailableStock from "./features/our-company/available-stocks/AvailableStock";
import OurCompany from "./pages/OurCompnay";
import AboutUs from "./features/our-company/about/AboutUs";
import IcgManagement from "./features/our-company/icg-management/IcgManagement";
import OurHistory from "./features/our-company/our-history/OurHistory";
import icgMarketData from "../icgMarketData.json";
import Antioxidant from "./features/category/Antioxidant";
import HinderedAminLightStabilizers from "./features/category/HinderedAminLightStabilizers";
import UVAbsorbers from "./features/category/UVAbsorbers";
import FlameRetardant from "./features/category/FlameRetardant";
import OpticalBrightner from "./features/category/OpticalBrightner";
import PigmentDyes from "./features/category/PigmentDyes";
import PolymersAndResins from "./features/category/PolymersAndResins";
import NucleactingAgents from "./features/category/NucleactingAgents";
import MasterBatch from "./features/category/MasterBatch";
import AntiBlock from "./features/category/AntiBlock";
import Plasticizers from "./features/category/Placticizers";
import PolymerAdditives from "./features/category/PolymerAdditives";
import Compound from "./features/category/Compound";
import MediaEvent from "./features/media/media-and-news/MediaEvent";
import ProductFinderHomePage from "./features/product-finder/ProductFinderHomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllMediaEvents from "./features/media/media-and-news/MediaEvents";
import RequestFileForm from "./features/our-company/available-stocks/RequestFileForm";
import WhatsAppButton from "./WhatsappButton";
import MediaAndNews from "./features/media/media-and-news/MediaAndNews";
import AllMediaAndNews from "./features/media/media-and-news/AllMediaAndNews";
import AllBlogs from "./features/media/blogs-and-articles/AllBlogs";
import Article from "./features/media/blogs-and-articles/Article";
import AllArticles from "./features/media/blogs-and-articles/AllArticles";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <div className="">
      <WhatsAppButton />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<OurCompany />} />

            {/* redirect /home to / */}
            <Route path="/our-company" element={<Navigate to="/" replace />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/icg-management" element={<IcgManagement />} />
            <Route path="/our-history" element={<OurHistory />} />
            <Route path="/available-stocks" element={<AvailableStock />} />
            <Route
              path="/available-stocks/:productId"
              element={<ProductDetail />}
            />
            {/* redirect /home to / */}
            <Route path="/our-company" element={<Navigate to="/" replace />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/icg-management" element={<IcgManagement />} />
            <Route path="/our-history" element={<OurHistory />} />
            <Route path="/available-stocks" element={<AvailableStock />} />
            <Route path="/media-news" element={<MediaPage />} />
            <Route path="/media-news/:mediaId" element={<MediaAndNews />} />
            <Route path="/all-media-and-news" element={<AllMediaAndNews />} />
            <Route path="/media-events" element={<MediaEvents />} />
            <Route path="/all-media-events" element={<AllMediaEvents />} />
            <Route path="/media-events/:mediaId" element={<MediaEvent />} />
            <Route path="/blog-articles" element={<BlogsAndArticles />} />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="/all-articles" element={<AllArticles />} />

            <Route path="/blog/:blogId" element={<Blog />} />
            <Route path="/all-blogs" element={<AllBlogs />} />
            {/* <Route path="/blog-articles/:blogId" element={<Blog />} /> */}
            {/* <Route path="/blog-articles" element={<MediaText />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/icg-career" element={<ICGCareer />} />
            <Route path="/job/:jobId" element={<Career />} />
            <Route path="/life-at-icg" element={<Gallery />} />

            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route
              path="/products-and-solutions/antioxidants-(na)"
              element={<Antioxidant />}
            />
            <Route
              path="/products-and-solutions/hindered-amine-light-stabilizers-(hals)"
              element={<HinderedAminLightStabilizers />}
            />
            <Route
              path="/products-and-solutions/uv-absorbers"
              element={<UVAbsorbers />}
            />
            <Route
              path="/products-and-solutions/flame-retardants"
              element={<FlameRetardant />}
            />
            <Route
              path="/products-and-solutions/optical-brighteners-(ob)"
              element={<OpticalBrightner />}
            />
            <Route
              path="/products-and-solutions/pigments-and-dyes"
              element={<PigmentDyes />}
            />
            <Route
              path="/products-and-solutions/polymers-and-resins"
              element={<PolymersAndResins />}
            />
            <Route
              path="/products-and-solutions/nucleating-agents"
              element={<NucleactingAgents />}
            />
            <Route
              path="/products-and-solutions/masterbatch"
              element={<MasterBatch />}
            />
            <Route
              path="/products-and-solutions/anti-blocks"
              element={<AntiBlock />}
            />
            <Route
              path="/products-and-solutions/plasticizers"
              element={<Plasticizers />}
            />
            <Route
              path="/products-and-solutions/polymer-additives"
              element={<PolymerAdditives />}
            />
            <Route
              path="/products-and-solutions/compound"
              element={<Compound />}
            />

            <Route path="/contact" element={<Contact />} />
            <Route
              path="/available-stocks/:productId"
              element={<ProductDetail />}
            />

            {/* ICG Market */}
            <Route path="/products-and-solutions" element={<IcgLayout />}>
              <Route index element={<Home />} />
              <Route
                path=":pageName"
                element={
                  <IcgMarketTemplate icgMarketData={icgMarketData.icgMarket} />
                }
              />
            </Route>
            <Route path="*" element={<div>404 - Page Not Found</div>} />
            <Route path="product-finder" element={<ProductFinderHomePage />} />
            <Route path="/request-file-form" element={<RequestFileForm />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
