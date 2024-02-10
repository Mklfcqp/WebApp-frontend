<template>
    <main>
        <TBackground />
        <TNavbar />

        <section>
            <div class="content">

                <div class="mainbox">

                    <div class="header">
                        <span class="text1">WATCHLIST</span>
                    </div>

                    <div class="overlay" v-if="showAddForm">
                        <form v-if="showAddForm" class="add_form">

                            <div class="add_form_description">ADD COMPANY TO WATCHLIST</div>

                            <div class="company_add_box">
                                <div class="input_format">
                                    <input v-model="newBox.company" type="text" id="company" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="company" class="add_box_label">COMPANY</label>
                                </div>
                            </div>

                            <div class="ticker_add_box">
                                <div class="input_format">
                                    <input v-model="newBox.ticker" type="text" id="ticker" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="ticker" class="add_box_label">TICKER</label>
                                </div>

                            </div>

                            <div class="price_add_box">

                                <div class="input_format">
                                    <input v-model="newBox.price" type="text" id="price" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="price" class="add_box_label">CURRENT PRICE</label>
                                </div>

                                <div class="input_format">
                                    <input v-model="newBox.currencyPrice" type="text" id="currencyPrice" required
                                        class="add_form_input_double_2" value="USD" />
                                </div>
                            </div>

                            <div class="dcf_add_box">

                                <div class="input_format">
                                    <input v-model="newBox.dcf" type="text" id="dcf" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="dcf" class="add_box_label">DCF</label>
                                </div>

                                <div class="input_format">
                                    <input v-model="newBox.currencyDcf" type="text" id="currencyDcf" required
                                        class="add_form_input_double_2" value="USD" />
                                </div>

                            </div>

                            <div class="dividend_q_add_box">
                                <div class="input_format">
                                    <input v-model="newBox.dividendQ" type="text" id="dividendQ" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="dividendQ" class="add_box_label">DIVIDEN -
                                        QUARTERLY</label>
                                </div>


                                <div class="input_format">
                                    <input v-model="newBox.currencyDividendQ" type="text" id="currencyDividendQ" required
                                        class="add_form_input_double_2" value="USD" />
                                </div>
                            </div>


                            <div class="add_form_buttons">
                                <button type="submit" @click="addStockToWatchlist" class="add_form_button">ADD</button>
                                <button type="button" @click="cancelAdd" class="add_form_button">CANCEL</button>
                            </div>

                        </form>
                    </div>



                    <div class="overlay" v-if="showEditForm">
                        <form v-if="showEditForm" class="add_form">

                            <div class="add_form_description">UPDATE WATCHLIST</div>

                            <div class="company_add_box">
                                <div class="input_format">
                                    <input v-model="updateBox.company" type="text" id="company" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="company" class="add_box_label">COMPANY</label>
                                </div>
                            </div>

                            <div class="ticker_add_box">
                                <div class="input_format">
                                    <input v-model="updateBox.ticker" type="text" id="ticker" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="ticker" class="add_box_label">TICKER</label>
                                </div>

                            </div>

                            <div class="price_add_box">

                                <div class="input_format">
                                    <input v-model="updateBox.price" type="text" id="price" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="price" class="add_box_label">CURRENT PRICE</label>
                                </div>

                                <div class="input_format">
                                    <input v-model="updateBox.currencyPrice" type="text" id="currencyPrice" required
                                        class="add_form_input_double_2" value="USD" />
                                </div>
                            </div>

                            <div class="dcf_add_box">

                                <div class="input_format">
                                    <input v-model="updateBox.dcf" type="text" id="dcf" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="dcf" class="add_box_label">DCF</label>
                                </div> 

                             
                    

                            <div class="input_format">
                                <input v-model="updateBox.currencyDcf" type="text" id="currencyDcf" required
                                    class="add_form_input_double_2" value="USD" />
                            </div>

                    </div>

                    <div class="dividend_q_add_box">
                        <div class="input_format">
                            <input v-model="updateBox.dividendQ" type="text" id="dividendQ" required
                                class="add_form_input_double_1" placeholder="" />
                            <label for="dividendQ" class="add_box_label">DIVIDEN -
                                QUARTERLY</label>
                        </div>


                        <div class="input_format">
                            <input v-model="updateBox.currencyDividendQ" type="text" id="currencyDividendQ" required
                                class="add_form_input_double_2" value="USD" />
                        </div>
                    </div>

                    <div class="add_form_buttons">
                        <button type="submit" @click="updateWatchlist()" class="add_form_button">UPDATE</button>
                        <button type="button" @click="cancelAdd" class="add_form_button">CANCEL</button>
                    </div>

                    </form>
                </div>


                <div class="overlay" v-if="showDeleteConfirmation">
                    <div v-if="showDeleteConfirmation" class="confirmation">
                        <p>Are you sure you want to delete this item?</p>
                        <div class="delete_confirmation_buttons">
                            <div class="delete_button" @click="confirmDelete">Delete</div>
                            <div class="cancel_button" @click="cancelDelete">Cancel</div>
                        </div>
                    </div>
                </div>

                <div class="overlay" v-if="loading">
                    <div v-if="loading" class="loader">
                        <div class="cell d-0"></div>
                        <div class="cell d-1"></div>
                        <div class="cell d-2"></div>

                        <div class="cell d-1"></div>
                        <div class="cell d-2"></div>


                        <div class="cell d-2"></div>
                        <div class="cell d-3"></div>

                        <div class="cell d-3"></div>
                        <div class="cell d-4"></div>
                    </div>
                </div>

                <table v-if="!loading">
                    <thead>
                        <tr class="watchlist_table">

                            <th scope="col" class="Ticker">
                                <div>Ticker</div>
                            </th>
                            <th scope="col" class="Company" @click="sortTableByCompany">
                                <Icon icon="mdi:alphabet-a" class="watchlist_table_icon" />
                                <div>Company</div>
                            </th>
                            <th scope="col" class="Current_Price" @click="sortTableByCurrentPrice">
                                <Icon icon="foundation:dollar" class="watchlist_table_icon" />
                                <div>Current Price</div>
                            </th>
                            <th scope="col" class="DCF" @click="sortTableByDCF">
                                <Icon icon="foundation:dollar" class="watchlist_table_icon" />
                                <div>DCF</div>
                            </th>
                            <th scope="col" class="Dividend_Yield" @click="sortTableByDividendYield">
                                <Icon icon="material-symbols:percent" class="watchlist_table_icon" />
                                <div>Dividend Yield</div>
                            </th>
                            <th scope="col" class="Dividend_Q" @click="sortTableByDividendQ">
                                <Icon icon="solar:dollar-line-duotone" class="watchlist_table_icon" />
                                <div>Dividend(Q)</div>
                            </th>
                            <th scope="col" class="Dividend_Y" @click="sortTableByDividendY">
                                <Icon icon="solar:dollar-outline" class="watchlist_table_icon" />
                                <div>Dividend(Y)</div>
                            </th>
                            <th scope="col" class="Disparity" @click="sortTableByDisparity">
                                <Icon icon="material-symbols:percent" class="watchlist_table_icon" />
                                <div>Disparity</div>
                            </th>

                            <th scope="col" class="Edit_remove"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="box in paginatedData" :key="box.id" class="added_form">
                            <th scope="row" class="hidden-id">{{ box.id }}</th>
                            <td class="ticker_box">{{ box.ticker }}</td>
                            <td class="company_box">{{ box.company }}</td>
                            <td class="price_box">
                                <div class="price_value">{{ box.price }}</div>
                                <div class="currency">{{ box.currencyPrice }}</div>
                            </td>
                            <td class="dcf_box">
                                <div class="dcf_value">{{ box.dcf }}</div>
                                <div class="currency">{{ box.currencyDcf }}</div>
                            </td>
                            <td class="dividend_yield_box">
                                <div>{{ box.dividendYield }}</div>
                                <div class="currency">%</div>
                            </td>
                            <td class="dividend_q_box">
                                <div class="dividend_q">{{ box.dividendQ }}</div>
                                <div class="currency">{{ box.currencyDividendQ }}</div>
                            </td>
                            <td class="dividend_y_box">
                                <div class="dividend_y">{{ box.dividendY }}</div>
                                <div class="currency">{{ box.currencyDividendY }}</div>
                            </td>
                            <td class="disparity_box">
                                <div
                                    :class="{ 'disparity_overvalued': box.overValuedUnderValued.includes('Overvalued'), 'disparity_undervalued': box.overValuedUnderValued.includes('Undervalued'), 'disparity_normal': !box.overValuedUnderValued.includes('Overvalued') && !box.overValuedUnderValued.includes('Undervalued') }">
                                    {{ box.overValuedUnderValued }}</div>
                            </td>
                            <td class="edit_remove">
                                <button class="edit_remove_button" @click="loadWatchlistForEdit(box.id)">
                                    <Icon icon="mdi:edit-outline" class="edit_remove_icon" />
                                </button>
                                <button class="edit_remove_button" @click="deleteWatchlistConfirmation(box.id)">
                                    <Icon icon="mingcute:delete-fill" class="edit_remove_icon" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="pages_panel" v-if="totalPages > 1">
                    <div class="firstPage" @click="firstPage">
                        <Icon icon="fluent:arrow-previous-12-filled" />
                    </div>
                    <div class="previous_page" @click="prevPage" :disabled="currentPage === 1">
                        <Icon icon="ep:arrow-left-bold" />
                    </div>
                    <div class="current_page">{{ currentPage }} / {{ totalPages }}</div>
                    <div class="next_page" @click="nextPage" :disabled="currentPage === totalPages">
                        <Icon icon="ep:arrow-right-bold" />
                    </div>
                    <div class="lastPage" @click="lastPage">
                        <Icon icon="fluent:arrow-next-12-filled" />
                    </div>
                </div>


                <div class="bot">

                    <button @click="showAddForm = true" v-if="!showAddForm" class="bot_box">

                        <div class="bot_box_icon">
                            <Icon icon="typcn:plus" class="bot_icon" />
                        </div>

                        <div class="bot_box_button">Add Stock to Watchlist</div>

                    </button>

                </div>

            </div>


            </div>

        </section>
    </main>
</template>






<script>
import TNavbar from '@/components/TNavbar.vue'
import { Icon } from '@iconify/vue';
import db from '../utils/db.js'
import axios from 'axios';
import TBackground from '@/components/TBackground.vue'
import Pagination from 'vue-pagination-2';

export default {

    components: {
        TNavbar,
        Icon,
        TBackground,
        Pagination

    },
    data() {
        return {
            boxes: [],
            showAddForm: false,
            newBox: {
                ticker: "",
                company: "",
                price: "",
                currencyPrice: "USD",
                dcf: "",
                currencyDcf: "USD",
                dividendQ: "",
                currencyDividendQ: "USD",
            },
            box: {
                ticker: "",
                company: "",
                price: "",
                currencyPrice: "",
                dcf: "",
                currencyDcf: "",
                dividendQ: "",
                currencyDividendQ: "",
                dividendY: "",
                currencyDividendY: "",
                dividendYield: "",
                overValuedUnderValued: ""

            },
            showEditForm: false,
            updateBox: {
                id: "",
                ticker: "",
                company: "",
                price: "",
                currencyPrice: "",
                dcf: "",
                currencyDcf: "",
                dividendQ: "",
                currencyDividendQ: "",
            },
            selectedBoxId: null,
            showDeleteConfirmation: false,
            deleteItemId: null,
            loading: true,
            pageSize: 9,
            currentPage: 1,
        }
    },


    computed: {
        totalPages() {
            return Math.ceil(this.boxes.length / this.pageSize);
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.boxes.slice(start, end);
        },
    },

    beforeMount() {
        this.getWatchlists()
    },

    methods: {
        redirectToWatchlist() {
            this.$router.push("/watchlistENG");
        },

        redirectToCV() {
            this.$router.push("/cvENG");
        },

        loadWatchlistForEdit(id) {
            this.selectedBoxId = id;
            this.showEditForm = true;
            const selectedBox = this.boxes.find(box => box.id === id);
            this.updateBox = { ...selectedBox };
        },

        getWatchlists() {
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');

            if (!accessToken || !refreshToken) {
                console.error('User not authenticated');
                return;
            }

            const headers = {
                Authorization: `Bearer ${accessToken}`,
            };

            axios.get('webapp-backend-production.up.railway.app/watchlist/load', { headers })
                .then(response => {
                    this.boxes = response.data;
                    this.loading = false;
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },


        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },

        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },

        firstPage() {
            this.currentPage = 1;
        },
        lastPage() {
            this.currentPage = this.totalPages;
        },

        async updateWatchlist() {
            try {
                if (this.selectedBoxId === null) {
                    console.error("No selected box ID.");
                    return;
                }

                const watchlistUpdateData = {
                    id: this.selectedBoxId,
                    ticker: this.updateBox.ticker,
                    company: this.updateBox.company,
                    price: this.updateBox.price,
                    currencyPrice: this.updateBox.currencyPrice,
                    dcf: this.updateBox.dcf,
                    currencyDcf: this.updateBox.currencyDcf,
                    dividendQ: this.updateBox.dividendQ,
                    currencyDividendQ: this.updateBox.currencyDividendQ,
                    currencyDividendY: this.updateBox.currencyDividendQ,
                };

                const response = await db.put(`/watchlist/update`, watchlistUpdateData);

                if (response.ok) {
                    this.$router.push('/watchlistENG');
                    console.log("Data have been sent successfully:", response.data);
                } else {
                    console.error("Sending failed:", await response.json());
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        },


        async deleteWatchlist(id) {
            try {
                const response = await fetch(`webapp-backend-production.up.railway.app/watchlist/delete/${id}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    console.log('Watchlist deleted successfully');
                    this.$router.go(0);
                } else {
                    console.error('Failed to delete watchlist');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        },


        cancelAdd() {
            this.clearFields();
            this.showAddForm = false;
            this.showEditForm = false;
        },

        clearFields() {
            this.newBox = {
                ticker: "",
                company: "",
                price: "",
                currencyPrice: "USD",
                dcf: "",
                currencyDcf: "USD",
                dividendQ: "",
                currencyDividendQ: "USD",
                dividendY: "",
                currencyDividendY: "USD",
                dividendYield: ""
            };
        },


        async addStockToWatchlist() {
            try {
                const watchlistAddData = {
                    ticker: this.newBox.ticker,
                    company: this.newBox.company,
                    price: this.newBox.price,
                    currencyPrice: this.newBox.currencyPrice,
                    dcf: this.newBox.dcf,
                    currencyDcf: this.newBox.currencyDcf,
                    dividendQ: this.newBox.dividendQ,
                    currencyDividendQ: this.newBox.currencyDividendQ,
                    currencyDividendY: this.newBox.currencyDividendQ,
                };

                const response = await db.post("/watchlist/add", watchlistAddData);

                if (response.ok) {
                    console.log("Data have been sent successfully:", response.data);
                } else {
                    console.error("Sending failed:", await response.json());
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        },


        deleteWatchlistConfirmation(id) {
            this.deleteItemId = id;
            this.showDeleteConfirmation = true;
        },

        confirmDelete() {
            this.deleteWatchlist(this.deleteItemId);
            this.showDeleteConfirmation = false;
        },
        cancelDelete() {
            this.deleteItemId = null;
            this.showDeleteConfirmation = false;
        },

        sortTableByCompany() {
            this.boxes.sort((a, b) => {
                if (a.company > b.company) {
                    return 1;
                } else if (a.company < b.company) {
                    return -1;
                } else {
                    return 0;
                }
            });
        },

        sortTableByCurrentPrice() {
            this.boxes.sort((a, b) => b.price - a.price);
        },

        sortTableByDCF() {
            this.boxes.sort((a, b) => b.dcf - a.dcf);
        },

        sortTableByDividendYield() {
            this.boxes.sort((a, b) => b.dividendYield - a.dividendYield);
        },

        sortTableByDividendQ() {
            this.boxes.sort((a, b) => b.dividendQ - a.dividendQ);
        },

        sortTableByDividendY() {
            this.boxes.sort((a, b) => b.dividendY - a.dividendY);
        },


        sortTableByDisparity() {
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');

            if (!accessToken || !refreshToken) {
                console.error('User not authenticated');
                return;
            }

            const headers = new Headers();
            headers.append('Authorization', `Bearer ${accessToken}`);

            fetch('webapp-backend-production.up.railway.app/watchlist/sorted/disparity', { headers })
                .then(res => res.json())
                .then(data => {
                    this.boxes = data;
                    console.log(data);
                })
                .catch(error => console.error('Error:', error));
        },

    }

}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Six+Caps&display=swap');


*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

section {
    height: 100vh;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    top: 0;
    left: 0;
}

/** HEADER */
.text1 {
    font-size: 2rem;
    background-image: linear-gradient(to right, #1ff5e7, #46eefa, #41dfff, #52cffe, #69bff8, #6cb5f6, #72abf2, #7aa1ed, #729bf1, #6b95f5, #648ff8, #4a6ac0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    max-width: 500px;
    text-transform: uppercase;
    color: white;
    letter-spacing: 6px;
    position: relative;
    animation: text 3s 1;
    font-family: Oswald;
}

@keyframes text {

    0% {

        color: #000;

    }

    30% {

        letter-spacing: 15px;

    }

    85% {

        letter-spacing: 6px;

    }
}



/*.content {
    width: 100rem;
    height: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0) 100%);
    border-radius: 20px;
    z-index: 10;
}*/


/** CONTENT - MAINBOX */
.mainbox {
    width: 95rem;
    height: 45rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #2b282888;
    /*     box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset, 0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12); */
    gap: 1px;
    border-radius: 20px;
    overflow-y: auto;
}

.header {
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Oswald', 'Noto Serif', sans-serif;
    color: #9e8a53;
    font-size: 2rem;
    letter-spacing: 3px;
}

.watchlist_table {
    height: 2.5rem;
    width: 85rem;
    border: 1px solid #8880805e;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: row;
    background: #393433;
}

.watchlist_table div {
    color: #8f8f8f;
    font-weight: 400;
    font-family: Oswald;
    letter-spacing: 0.5px;
    font-size: 0.89rem;

}

.watchlist_table_icon {
    color: #8f8f8f;
    font-size: 1rem;
}

.Ticker {
    height: 2.5rem;
    width: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 0 0 0;
    font-weight: 400;

}

.Company {
    height: 2.5rem;
    width: 27rem;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: 400;
}

.Disparity {
    height: 2.5rem;
    width: 23rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
}

.Edit_remove {
    height: 2.5rem;
    width: 7rem;
}


.Current_Price,
.DCF,
.Dividend_Yield,
.Dividend_Q,
.Dividend_Y {
    height: 2.5rem;
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-weight: 400;
}

.Company:hover,
.Current_Price:hover,
.DCF:hover,
.Dividend_Yield:hover,
.Dividend_Q:hover,
.Dividend_Y:hover,
.Disparity:hover {
    background-color: #d4ad4262;
    cursor: pointer;
    border: 1px solid #8880805e;
}



/** BOT */

.bot {
    height: 5%;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border-radius: 5px;
    margin-top: 15px;

}

.bot_box {
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    border: rgba(33, 151, 197, 0.815);
    background: none;
}

.bot_box_icon {
    background-color: rgba(22, 162, 218, 0.274);
    color: rgba(33, 151, 197, 0.815);
    border: none;
    border-radius: 5px 0 0 5px;
    height: 2rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.bot_icon {
    font-size: 1.2rem;
    color: rgba(33, 151, 197, 0.815);
}

.bot_box_button {
    background-color: rgba(20, 165, 223, 0.384);
    color: rgba(33, 151, 197, 0.815);
    border: none;
    border-radius: 0 5px 5px 0;
    height: 2rem;
    width: 10rem;
    font-size: 0.9rem;
    font-family: Oswald;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

}

.bot_box:hover {
    background-color: #ffffff21;
    cursor: pointer;
    border-radius: 5px;
}



/** ADDED FORM */

.added_form {
    height: 3rem;
    width: 85rem;
    border: 1px solid #8880805e;
    border-radius: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 7px;
    background: #434343;
    background: radial-gradient(at center, #3d3b3bc0, #383436);
    margin-bottom: 3px;
}

.ticker_box {
    height: 2rem;
    width: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
    letter-spacing: 0.05rem;
    font-weight: 400;
    color: #807f7f;
    font-family: sans-serif;
}


.company_box {
    height: 2rem;
    width: 27rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    font-size: 0.8rem;
    color: rgba(8, 172, 236, 0.918);
    font-family: sans-serif;
    letter-spacing: 0.5px;

}

.disparity_box {
    height: 2rem;
    width: 23rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
}

.disparity_normal {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 10rem;
    background: #c9c9c934;
    font-size: 0.9rem;
    color: #c9c9c9;
}

.disparity_overvalued {
    position: relative;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 10rem;
    background: #e0454a1f;
    font-size: 0.9rem;
    color: #e0454b;
}


.disparity_undervalued {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 10rem;
    background: rgba(198, 239, 206, 0.082);
    font-size: 0.9rem;
    color: #6cc06c;
}

.edit_remove {
    height: 2rem;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
}

.edit_remove_button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    background: none;
    border-radius: 3px;
    border: 1px solid rgb(136, 136, 136);
    background: rgba(136, 136, 136, 0.089);
}

.edit_remove_button:hover {
    background: #c7c5c1d3;

}

.edit_remove_icon {
    color: rgb(136, 136, 136);
    font-size: 1.2rem;
}

.edit_remove_button:hover .edit_remove_icon {
    color: #2a2727;
}



.price_box,
.dcf_box,
.dividend_yield_box,
.dividend_q_box,
.dividend_y_box {
    height: 2rem;
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-size: 0.95rem;
    color: rgba(8, 172, 236, 0.918);
    font-family: sans-serif;
}



.currency {
    font-size: 0.6rem;
    color: #807f7f;
    font-weight: 100;
    padding-top: 5px;
}




/** PAGE PANEL */
.pages_panel {
    height: 2rem;
    width: 85rem;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px;
    font-family: Oswald;
}


.firstPage,
.previous_page,
.next_page,
.lastPage {
    width: 4rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #41dfff;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.137);
    cursor: pointer;
}

.firstPage:hover,
.previous_page:hover,
.next_page:hover,
.lastPage:hover {
    background: #2a2727;
    border: 1px solid;
}


.current_page {
    width: 4rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #41dfff;
    border-radius: 5px;
    background: rgba(14, 180, 202, 0.082);
}




/** ADD FORM */

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.39);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add_form {
    height: 25rem;
    width: 25rem;
    border: 1px solid #8880805e;
    border-radius: 5px;
    background: #434343;
    background: radial-gradient(at center, #3d3b3b, #383436);
    z-index: 1000;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
}

.add_form_description {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-size: 2rem;
    font-family: 'Six Caps', 'Noto Serif', sans-serif;
    letter-spacing: 3px;
    color: #977e38;
}

.company_add_box,
.ticker_add_box,
.price_add_box,
.dcf_add_box,
.dividend_q_add_box {
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    gap: 10px;
}

.add_form_input_double_1 {
    width: 12rem;
    height: 2rem;
    border: 1px solid #d8c6c65e;
    border-radius: 3px;
    padding-block: 0.8rem;
    background: none;
    position: relative;
    padding-left: 10px;
    color: rgba(33, 151, 197, 0.815);
}

.add_form_input_double_2 {
    width: 3rem;
    height: 2rem;
    background: none;
    border: 1px solid #d8c6c65e;
    border-radius: 3px;
    padding-left: 10px;
    color: rgba(33, 151, 197, 0.815);
}

.add_form_input_double_1:focus,
.add_form_input_double_2:focus {
    outline: none;
    border: 1px solid #a08228;
}

.input_format {
    position: relative;
    display: flex;
    align-items: center;
    font-family: sans-serif;
}

.input_format label {
    color: #d8c6c65e;
    letter-spacing: 0.05rem;
    font-size: 0.7rem;
}

.add_box_label {
    position: absolute;
    left: 10px;
    transition: top 0.3s, font-size 0.3s;
    background: #434343;
    background: radial-gradient(at center, #3d3b3b, #383436);
}


.add_form_input_double_1:focus+.add_box_label {
    top: -6px;
    font-size: 0.7rem;
    left: 0.8rem;
    font-weight: 400;
    color: #a08228;
    font-family: sans-serif;
}

.add_form_input_double_1:not(:placeholder-shown).add_form_input_double_1:not(:focus)+.add_box_label {
    top: -6px;
    font-size: 0.7rem;
    left: 0.8rem;
    font-weight: 400;

}

.add_form_buttons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 20px;

}

.add_form_button {
    border: 1px solid;
    width: 5rem;
    height: 2rem;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    background: none;
    border-radius: 3px;
    border: 1px solid rgb(136, 136, 136);
    background: rgba(136, 136, 136, 0.089);
    font-size: 0.9rem;
    color: rgb(136, 136, 136);
    font-weight: 600;
}

.add_form_button:hover {
    background: #977e38;
    color: black;
}


.hidden-id {
    display: none;
}



/** DELETE CONFIRMATION */

.confirmation {
    width: 22rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #434343;
    background: radial-gradient(at center, #3d3b3b, #383436);
    border: 1px solid #8880805e;
    border-radius: 10px;
    gap: 30px;
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: 500;
}

.confirmation p {
    color: rgb(160, 160, 160);

}

.delete_confirmation_buttons {
    height: 2rem;
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.delete_button {
    width: 8rem;
    height: 2rem;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    background: none;
    border-radius: 5px;
    background: #e0454a1f;
    font-size: 0.9rem;
    color: #e0454b;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cancel_button {
    width: 8rem;
    height: 2rem;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
    background: none;
    border-radius: 5px;
    font-size: 0.9rem;
    background: #c9c9c934;
    color: #c9c9c9;
    display: flex;
    align-items: center;
    justify-content: center;
}

.delete_button:hover,
.cancel_button:hover {
    background: linear-gradient(#fff2, transparent);
    backdrop-filter: blur(15px);
}





/** LOADER */

.loader {
    --cell-size: 20px;
    --cell-spacing: 1px;
    --cells: 3;
    --total-size: calc(var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing)));
    display: flex;
    flex-wrap: wrap;
    width: var(--total-size);
    height: var(--total-size);
}

.cell {
    flex: 0 0 var(--cell-size);
    margin: var(--cell-spacing);
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 4px;
    animation: 1.5s ripple ease infinite;
}

.cell.d-1 {
    animation-delay: 100ms;
}

.cell.d-2 {
    animation-delay: 200ms;
}

.cell.d-3 {
    animation-delay: 300ms;
}

.cell.d-4 {
    animation-delay: 400ms;
}

.cell:nth-child(1) {
    --cell-color: #5ffbf1;
}

.cell:nth-child(2) {
    --cell-color: #46eefa;
}

.cell:nth-child(3) {
    --cell-color: #52cffe;
}

.cell:nth-child(4) {
    --cell-color: #46eefa;
}

.cell:nth-child(5) {
    --cell-color: #52cffe;
}

.cell:nth-child(6) {
    --cell-color: #72abf2;
}

.cell:nth-child(7) {
    --cell-color: #52cffe;
}

.cell:nth-child(8) {
    --cell-color: #72abf2;
}

.cell:nth-child(9) {
    --cell-color: #5f88fb;
}

/*Animation*/
@keyframes ripple {
    0% {
        background-color: transparent;
    }

    30% {
        background-color: var(--cell-color);
    }

    60% {
        background-color: transparent;
    }

    100% {
        background-color: transparent;
    }
}







::-webkit-scrollbar {
    width: 0px;
}

::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}</style>