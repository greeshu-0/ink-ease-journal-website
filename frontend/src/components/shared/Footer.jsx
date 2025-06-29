function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer className="bg-deepsea py-3 shadow-inner mt-10 rounded-t-xl">
      <div className="max-w-4xl mx-auto text-center px-2">
        <h2 className="text-xl font-semibold text-seashell">Ink & Ease</h2>
        <p className="mt-1 italic text-sm text-seashell">
          "You are safe here. You are seen. You are enough."
        </p>

        <p className="mt-2 text-xs text-seashell">
          © {year} Ink & Ease · Made with 🩷 by Greeshu
        </p>
      </div>
    </footer>
  );
}

export default Footer;
