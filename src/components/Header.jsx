import "./header.css";

const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <i className="ri-home-line"></i>
      <i className="bi bi-alarm"></i>
      <span>سلام! این یک متن نمونه به زبان فارسی است.</span>
      <span>Hello! This is a sample text in English.</span>

      <span>سلام! دا په پښتو کې یو نمونه متن دی.</span>
      <span>مرحبًا! هذا نص تجريبي باللغة العربية.</span>
      <span>سلام! یہ اردو زبان میں ایک نمونہ متن ہے۔</span>
      {/* logo */}
      {/* search-bar */}
      {/* hav */}
    </header>
  );
};

export default Header;
