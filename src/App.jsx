import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

import searchIcon from './IMGS/search_icn.png';
import logo from './IMGS/logo.png';
import accessibilityIcon from './IMGS/accessibilityIcon.png';
import kk from './IMGS/kk.jpg';

export default function App(){
    

    return(
        <div className='main-container'>
            {/* First Floor */}
            <div className='firstFloor'>
                <h4>საიტის რუკა</h4>
                <h4>ცხელი ხაზი 1501</h4>
                <h4>EN</h4>
                <h4>info@mepa.gov.ge</h4>

                <div className='searchBox'>
                    <input type="search" className='srch'/>
                    <a href="">
                        <img src={searchIcon} alt="search" className='searchIcon'/>
                    </a>
                </div>
            </div>


            {/* Second floor */}
            <div className='secondFloor'>
                <img src={logo} alt="logo" className='logoImg'/>
                <h3>საქართველოს გარემოს დაცვისა და სოფლის მეურნეობის სამინისტრო</h3>
            </div>


            {/* Third Floor */}
            <div className='thirdFloor'>
                <nav className='navbar navbar-expand-lg navbar-light bg-light w-100' >
                    <div className='container-fluid'>
                        {/* Icon access */}
                        <a href="">
                            <img src={accessibilityIcon} alt="accessibility" className='accesLogo'/>
                        </a>

                        {/* burger icon */}
                        <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" arial-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        
                        {/* navbar links */}
                        <div className='collapse navbar-collapse justify-content-center' id='navbarNav'>
                            <ul>
                                <li><a href="">სამინისტრო</a></li>
                                <li><a href="">საზოგადოებასთან ურთიერთობა</a></li>
                                <li><a href="">საჯარო ინფორმაცია</a></li>
                                <li><a href="">კანონმდებლობა</a></li>
                                <li><a href="">პროექტები</a></li>
                                <li><a href="">ბმულები</a></li>
                                <li><a href="">DCFTA</a></li>
                                <li><a href="">კონტაქტი</a></li>
                            </ul>
                        </div>
                    </div>
                </nav> 
            </div>
                    


            {/* Fourth Floor */}
            <div className="fourthFloor">
                <a href=""><h3 className="text-start mb-4">ახალი ამბები</h3></a>

                <div id="newsCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#newsCarousel" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#newsCarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#newsCarousel" data-bs-slide-to="2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                        <img src={kk} className="d-block w-100" alt="News 1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>გარემოს დაცვის ინიციატივა</h5>
                            <p>ახალი ეკოლოგიური პროექტის დაწყება</p>
                        </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="3000">
                        <img src={kk} className="d-block w-100" alt="News 2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>სოფლის მეურნეობის განვითარება</h5>
                            <p>ახალი ინოვაციები ფერმერებისთვის</p>
                        </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="3000">
                        <img src={kk} className="d-block w-100" alt="News 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>ბიომრავალფეროვნების დაცვა</h5>
                            <p>დაცული ტერიტორიების მხარდაჭერა</p>
                        </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#newsCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#newsCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>    





            {/* fifth floor */}

            <div className='fifthFloor'>

                {/* Left side */}
                <div className='left_side'>
                    <div className='fifth_left'>
                        
                        <div className='left_1'>
                            <div className='l1'>
                                <h1>5</h1>
                                <h1>November</h1>
                            </div>

                            <div className='l2'>
                                <h1><img src={kk} alt="" /></h1>
                            </div>
                        </div>
                            
                        <div className='left_2'>
                            <p className='p_larger'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad ea repellat officia accusamus repellendus itaque, cumque ab laborum iusto quis fugiat corrupti reprehenderit nam! Aspernatur nam quod ipsa officia.</p>
                            
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem eaque nesciunt perspiciatis ea non, veritatis nulla provident eligendi, earum nihil optio officia accusantium, saepe pariatur velit harum quibusdam assumenda.
                                Corrupti magnam consequuntur aliquam esse voluptatem in, tempore consectetur. Nesciunt hic iure corporis vero eius doloremque, fugit, rem voluptatem voluptates, quod omnis dolorum impedit laboriosam natus beatae maxime vel perspiciatis.
                            </p>
                        </div>
                    </div>


                    <div className='fifth_left'>
                        
                        <div className='left_1'>
                            <div className='l1'>
                                <h1>5</h1>
                                <h1>November</h1>
                            </div>

                            <div className='l2'>
                                <h1><img src={kk} alt="" /></h1>
                            </div>
                        </div>
                            
                        <div className='left_2'>
                            <p className='p_larger'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad ea repellat officia accusamus repellendus itaque, cumque ab laborum iusto quis fugiat corrupti reprehenderit nam! Aspernatur nam quod ipsa officia.</p>
                            
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem eaque nesciunt perspiciatis ea non, veritatis nulla provident eligendi, earum nihil optio officia accusantium, saepe pariatur velit harum quibusdam assumenda.
                                Corrupti magnam consequuntur aliquam esse voluptatem in, tempore consectetur. Nesciunt hic iure corporis vero eius doloremque, fugit, rem voluptatem voluptates, quod omnis dolorum impedit laboriosam natus beatae maxime vel perspiciatis.
                            </p>
                        </div>
                    </div>



                    <div className='fifth_left'>
                        
                        <div className='left_1'>
                            <div className='l1'>
                                <h1 className='date'>5</h1>
                                <h1 className='dateNum'>November</h1>
                            </div>

                            <div className='l2'>
                                <h1><img src={kk} alt="" /></h1>
                            </div>
                        </div>
                            
                        <div className='left_2'>
                            <p className='p_larger'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad ea repellat officia accusamus repellendus itaque, cumque ab laborum iusto quis fugiat corrupti reprehenderit nam! Aspernatur nam quod ipsa officia.</p>
                            
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem eaque nesciunt perspiciatis ea non, veritatis nulla provident eligendi, earum nihil optio officia accusantium, saepe pariatur velit harum quibusdam assumenda.
                                Corrupti magnam consequuntur aliquam esse voluptatem in, tempore consectetur. Nesciunt hic iure corporis vero eius doloremque, fugit, rem voluptatem voluptates, quod omnis dolorum impedit laboriosam natus beatae maxime vel perspiciatis.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* right side */}
                <div className="right_side container mt-5 mb-5">
                    <div className="row">
                        {/* Calendar */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <div className="cal p-3 shadow rounded">
                            <h4 className="mb-3 text-center">კალენდარი</h4>
                                <table className="table table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th>ორშ</th>
                                            <th>სამ</th>
                                            <th>ოთხ</th>
                                            <th>ხუთ</th>
                                            <th>პარ</th>
                                            <th>შაბ</th>
                                            <th>კვ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td>1</td><td>2</td></tr>
                                    
                                        <tr><td>3</td><td>4</td><td>5</td><td className="bg-success text-white rounded">6</td><td>7</td><td>8</td><td>9</td></tr>
                                    
                                        <tr><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td></tr>
                                    
                                        <tr><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td></tr>
                                    
                                        <tr><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Events */}
                        <div className="col-lg-6 col-md-12">
                            <div className="org p-3 shadow rounded">
                                <h4 className="mb-3 text-center">ღონისძიებები</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                    6 ნოემბერი — გარემოს დაცვის ახალი პროგრამის პრეზენტაცია
                                    </li>
                                    <li className="list-group-item">
                                    10 ნოემბერი — სოფლის მეურნეობის შეხვედრა ფერმერებთან
                                    </li>
                                    <li className="list-group-item">
                                    18 ნოემბერი — გარემოს საერთაშორისო დღე: გამწვანების აქცია
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* sixth floor */}
            <div className='sixthFloor'>
                <footer>
                    <h5>არქივი</h5>
                </footer>
            </div>
        </div>
    );
}