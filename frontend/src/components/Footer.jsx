const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Lumina. All rights reserved.</p>
        <p className="mt-2 text-sm">Designed for simplicity and professionalism.</p>
      </div>
    </footer>
  );
};

export default Footer;
