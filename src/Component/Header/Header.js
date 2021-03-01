import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand ms-5 border border-danger rounded-3">BPL Player Auction</a>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div >
                <h1 class="border ms-5">Available Players for choose</h1>
            </div>

        </div>

    );
};

export default Header;