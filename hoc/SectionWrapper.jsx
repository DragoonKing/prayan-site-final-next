const SectionWrapper = (Component, idName) => {
    function HOC() {
        return (
            // 
            <section className="sm:px-[6.5rem] px-5 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component />
            </section>
        );
    }
    return HOC;
};

export default SectionWrapper;
