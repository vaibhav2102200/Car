import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p>
            We use cookies to help improve your experience of our website. This cookie policy is part of our privacy policy, and covers the use of cookies between your device and our site.
          </p>
          <p>
            If you don’t wish to accept cookies from us, you should instruct your browser to refuse cookies from our website, with the understanding that we may be unable to provide you with some of your desired content and services.
          </p>
          {/* Add more cookie policy content here */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
