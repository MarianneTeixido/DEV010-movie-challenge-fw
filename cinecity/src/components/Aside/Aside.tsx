
function Aside({ filters, selectedFilter, onFilterChange, sortOptions, selectedSort, onSortChange }) {
    return (
        <aside>
            <div>
                <h2>Filter by:</h2>
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => onFilterChange(filter)}
                        className={selectedFilter === filter ? 'selected' : ''}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <div>
                <h2>Sort by:</h2>
                {sortOptions.map(option => (
                    <button
                        key={option.value}
                        onClick={() => onSortChange(option.value)}
                        className={selectedSort === option.value ? 'selected' : ''}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </aside>
    );
}

export default Aside;
