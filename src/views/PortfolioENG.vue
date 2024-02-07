<template>
    <main>
        <TBackground />
        <TNavbar />
        <section>
            <div class="content">

                <div class="mainbox">

                    <div class="header">
                        <span class="text1">PORTFOLIO</span>
                    </div>


                    <div class="overlay" v-if="showAddForm">
                        <form v-if="showAddForm" class="add_form">

                            <div class="add_form_description">ADD STOCK TO PORTFOLIO</div>

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

                            <div class="shares_add_box">
                                <div class="input_format">
                                    <input v-model="newBox.shares" type="text" id="shares" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="shares" class="add_box_label">SHARES</label>
                                </div>
                            </div>


                            <div class="buy_add_box">
                                <div class="input_format">
                                    <input v-model="newBox.buy" type="text" id="buy" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="buy" class="add_box_label">BUY</label>
                                </div>
                            </div>

                            <div class="sell_add_box">
                                <div class="input_format">
                                    <input v-model="newBox.sell" type="text" id="sell" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="sell" class="add_box_label">SELL</label>
                                </div>
                            </div>

                            <div class="interestBuySell_add_box">
                                <div class="input_format">
                                    <input v-model="newBox.interestBuySell" type="text" id="interestBuySell" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="interestBuySell" class="add_box_label">BUY/SELL - INTEREST</label>
                                </div>
                            </div>

                            <div class="dividend_add_box">
                                <div class="input_format">
                                    <input v-model="newBox.dividend" type="text" id="dividend" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="dividend" class="add_box_label">DIVIDEN</label>
                                </div>
                            </div>

                            <div class="interestDividend_add_box">
                                <div class="input_format">
                                    <input v-model="newBox.interestDividend" type="text" id="interestDividend" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="interestDividend" class="add_box_label">DIVIDEND - INTEREST</label>
                                </div>
                            </div>


                            <div class="add_form_buttons">
                                <button type="submit" @click="addStockToPortfolio" class="add_form_button">ADD</button>
                                <button type="button" @click="cancelAdd" class="add_form_button">CANCEL</button>
                            </div>

                        </form>
                    </div>






                    <div class="overlay" v-if="showEditForm">
                        <form v-if="showEditForm" class="add_form">

                            <div class="add_form_description">UPDATE STOCK</div>

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

                            <div class="shares_add_box">
                                <div class="input_format">
                                    <input v-model="updateBox.shares" type="text" id="shares" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="shares" class="add_box_label">SHARES</label>
                                </div>
                            </div>


                            <div class="buy_add_box">
                                <div class="input_format">
                                    <input v-model="updateBox.buy" type="text" id="buy" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="buy" class="add_box_label">BUY</label>
                                </div>
                            </div>

                            <div class="sell_add_box">
                                <div class="input_format">
                                    <input v-model="updateBox.sell" type="text" id="sell" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="sell" class="add_box_label">SELL</label>
                                </div>
                            </div>

                            <div class="interestBuySell_add_box">
                                <div class="input_format">
                                    <input v-model="updateBox.interestBuySell" type="text" id="interestBuySell" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="interestBuySell" class="add_box_label">BUY/SELL - INTEREST</label>
                                </div>
                            </div>

                            <div class="dividend_add_box">
                                <div class="input_format">
                                    <input v-model="updateBox.dividend" type="text" id="dividend" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="dividend" class="add_box_label">DIVIDEN</label>
                                </div>
                            </div>

                            <div class="interestDividend_add_box">
                                <div class="input_format">
                                    <input v-model="updateBox.interestDividend" type="text" id="interestDividend" required
                                        class="add_form_input_double_1" placeholder="" />
                                    <label for="interestDividend" class="add_box_label">DIVIDEND - INTEREST</label>
                                </div>
                            </div>


                            <div class="add_form_buttons">
                                <button type="submit" @click="updatePortfolio()" class="add_form_button">UPDATE</button>
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
                            <tr class="portfolio_table">



                                <th scope="col" class="Ticker">
                                    <div>Ticker</div>
                                </th>
                                <th scope="col" class="Company" @click="sortTableByCompany">
                                    <Icon icon="mdi:alphabet-a" class="portfolio_table_icon" />
                                    <div>Company</div>
                                </th>
                                <th scope="col" class="Shares" @click="sortTableByShares">

                                    <div>Shares</div>
                                </th>
                                <th scope="col" class="Buy" @click="sortTableByBuy">

                                    <div>Buy</div>
                                </th>
                                <th scope="col" class="Sell" @click="sortTableBySell">

                                    <div>Sell</div>
                                </th>
                                <th scope="col" class="InterestBuySell" @click="sortTableByInterestBuySell">

                                    <div>Interest</div>
                                </th>
                                <th scope="col" class="ProfitLossBuySell" @click="sortTableByProfitLossBuySell">

                                    <div>Profit/Loss </div>
                                </th>



                                <th scope="col" class="Dividend" @click="sortTableByDividend">

                                    <div>Dividend</div>
                                </th>
                                <th scope="col" class="InterestDividend" @click="sortTableByInterestDividend">

                                    <div>Interest</div>
                                </th>
                                <th scope="col" class="ProfitLossDividend" @click="sortTableByProfitLossDividend">

                                    <div>Profit/Loss</div>
                                </th>

                                <th scope="col" class="ProfitLossSum" @click="sortTableByProfitLossSum">

                                    <div>Profit/Loss</div>
                                </th>



                                <th scope="col" class="Edit_remove"></th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="box in paginatedData" :key="box.id" class="added_form">
                                <th scope="row" class="hidden-id">{{ box.id }}</th>
                                <td class="ticker_box">{{ box.ticker }}</td>
                                <td class="company_box">{{ box.company }}</td>
                                <td class="shares_box">{{ box.shares }}</td>
                                <td class="buy_box">{{ box.buy }}</td>
                                <td class="sell_box">{{ box.sell }}</td>
                                <td class="interestBuySell_box">{{ box.interestBuySell }}</td>
                                <td :class="{
                                    'profitLossBuySell_box_profit': box.profitLossBuySell > 0,
                                    'profitLossBuySell_box_loss': box.profitLossBuySell < 0,
                                    'profitLossBuySell_box_normal': box.profitLossBuySell === 0
                                }">
                                    {{ box.profitLossBuySell }}
                                </td>
                                <td class="dividend_box">{{ box.dividend }}</td>
                                <td class="interestDividend_box">{{ box.interestDividend }}</td>
                                <td :class="{
                                    'profitLossDividend_box_profit': box.profitLossDividend > 0,
                                    'profitLossDividend_box_loss': box.profitLossDividend < 0,
                                    'profitLossDividend_box_normal': box.profitLossDividend === 0
                                }">
                                    {{ box.profitLossDividend }}
                                </td>
                                <td :class="{
                                    'sumProfitLoss_box_profit': box.sumProfitLoss > 0,
                                    'sumProfitLoss_box_loss': box.sumProfitLoss < 0,
                                    'sumProfitLoss_box_normal': box.sumProfitLoss === 0
                                }">
                                    {{ box.sumProfitLoss }}
                                </td>


                                <td class="edit_remove">
                                    <button class="edit_remove_button" @click="loadPortfolioForEdit(box.id)">
                                        <Icon icon="mdi:edit-outline" class="edit_remove_icon" />
                                    </button>
                                    <button class="edit_remove_button" @click="deletePortfolioConfirmation(box.id)">
                                        <Icon icon="mingcute:delete-fill" class="edit_remove_icon" />
                                    </button>
                                </td>
                            </tr>
                            <tr v-for="sumBox in sumBoxes" :key="sumBox.id" class="added_form">
                                <th scope="row" class="hidden-id">{{ sumBox.id }}</th>
                                <td class="value_sum_box">
                                    <Icon icon="tabler:sum" />Total
                                </td>
                                <td class="buy_sum_box">{{ sumBox.buy }}</td>
                                <td class="sell_sum_box">{{ sumBox.sell }}</td>
                                <td class="interestBuySell_sum_box">{{ sumBox.interestBuySell }}</td>
                                <td class="profitLossBuySell_sum_box">{{ sumBox.profitLossBuySell }}</td>
                                <td class="dividend_sum_box">{{ sumBox.dividend }}</td>
                                <td class="interestDividend_sum_box">{{ sumBox.interestDividend }}</td>
                                <td class="profitLossDividend_sum_box">{{ sumBox.profitLossDividend }}</td>
                                <td :class="{
                                    'sumProfitLoss_sum_box_profit': sumBox.sumProfitLoss > 0,
                                    'sumProfitLoss_sum_box_loss': sumBox.sumProfitLoss < 0,
                                    'sumProfitLoss_sum_box_normal': sumBox.sumProfitLoss === 0
                                }">
                                    {{ sumBox.sumProfitLoss }}
                                </td>

                                <td class="edit_sum_remove">

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="pages_panel">
                    <div class="firstPage">First</div>
                    <div class="previous_page" @click="prevPage" :disabled="currentPage === 1">Previous</div>
                    <div class="current_page">{{ currentPage }}</div>
                    <div class="next_page" @click="nextPage" :disabled="currentPage === totalPages">Next</div>
                    <div class="lastPage">Last</div>
                </div>


                    <div class="bot">

                        <button @click="showAddForm = true" v-if="!showAddForm" class="bot_box">

                            <div class="bot_box_icon">
                                <Icon icon="typcn:plus" class="bot_icon" />
                            </div>

                            <div class="bot_box_button">Add Stock to Portfolio</div>

                        </button>

                    </div>

                </div>


            </div>

        </section>
    </main>
</template>






<script>
import TNavbar from '@/components/TNavbar.vue'
import TBackground from '@/components/TBackground.vue'
import { Icon } from '@iconify/vue';
import db from '../utils/db.js'
import axios from 'axios';

export default {

    components: {
        TNavbar,
        Icon,
        TBackground
    },
    data() {
        return {
            sumBoxes: [],
            boxes: [],
            showAddForm: false,
            newBox: {
                ticker: "",
                company: "",
                shares: "",
                buy: "",
                sell: "",
                interestBuySell: "",
                dividend: "",
                interestDividend: "",
            },
            box: {
                ticker: "",
                company: "",
                shares: "",
                buy: "",
                sell: "",
                interestBuySell: "",
                profitLossBuySell: "",
                dividend: "",
                interestDividend: "",
                profitLossDividend: "",
                sumProfitLoss: "",
            },
            sumBox: {
                buy: "",
                sell: "",
                interestBuySell: "",
                profitLossBuySell: "",
                dividend: "",
                interestDividend: "",
                profitLossDividend: "",
                sumProfitLoss: "",
            },
            showEditForm: false,
            updateBox: {
                id: "",
                ticker: "",
                company: "",
                shares: "",
                buy: "",
                sell: "",
                interestBuySell: "",
                dividend: "",
                interestDividend: "",
            },
            selectedBoxId: null,
            showDeleteConfirmation: false,
            deleteItemId: null,
            loading: true,
            pageSize: 11,
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
        this.getPortfolio()
        this.getPortfolioSUM()
    },

    methods: {
        loadPortfolioForEdit(id) {
            this.selectedBoxId = id;
            this.showEditForm = true;
            const selectedBox = this.boxes.find(box => box.id === id);
            this.updateBox = { ...selectedBox };
        },

        getPortfolio() {
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');

            if (!accessToken || !refreshToken) {
                console.error('User not authenticated');
                return;
            }

            const headers = new Headers();
            headers.append('Authorization', `Bearer ${accessToken}`);

            fetch('http://localhost:8080/portfolio/load', { headers })
                .then(res => res.json())
                .then(data => {
                    this.boxes = data;
                    this.loading = false;
                    console.log(data);
                })
                .catch(error => console.error('Error:', error));
        },

        getPortfolioSUM() {
            const accessToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');

            if (!accessToken || !refreshToken) {
                console.error('User not authenticated');
                return;
            }

            const headers = new Headers();
            headers.append('Authorization', `Bearer ${accessToken}`);

            fetch('http://localhost:8080/portfolio/load/sum', { headers })
                .then(res => res.json())
                .then(data => {
                    this.sumBoxes = [data];
                    this.loading = false;
                    console.log(data);
                })
                .catch(error => console.error('Error:', error));
        },



        async updatePortfolio() {
            try {
                if (this.selectedBoxId === null) {
                    console.error("No selected box ID.");
                    return;
                }

                const portfolioUpdateData = {
                    id: this.selectedBoxId,
                    ticker: this.updateBox.ticker,
                    company: this.updateBox.company,
                    shares: this.updateBox.shares,
                    buy: this.updateBox.buy,
                    sell: this.updateBox.sell,
                    interestBuySell: this.updateBox.interestBuySell,
                    dividend: this.updateBox.dividend,
                    interestDividend: this.updateBox.interestDividend
                };

                const response = await db.put(`/portfolio/update`, portfolioUpdateData);

                if (response.ok) {
                    this.$router.push('/portfolioENG');
                    console.log("Data have been sent successfully:", response.data);
                } else {
                    console.error("Sending failed:", await response.json());
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        },

        async deletePortfolio(id) {
            try {
                const response = await fetch(`http://localhost:8080/portfolio/delete/${id}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    console.log('Portfolio deleted successfully');
                    this.$router.go(0);
                } else {
                    console.error('Failed to delete portfolio');
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
                shares: "",
                buy: "",
                sell: "",
                interestBuySell: "",
                dividend: "",
                interestDividend: "",
            };
        },


        async addStockToPortfolio() {
            try {
                const portfolioAddData = {
                    ticker: this.newBox.ticker,
                    company: this.newBox.company,
                    shares: this.newBox.shares,
                    buy: this.newBox.buy,
                    sell: this.newBox.sell,
                    interestBuySell: this.newBox.interestBuySell,
                    dividend: this.newBox.dividend,
                    interestDividend: this.newBox.interestDividend
                };

                const response = await db.post("/portfolio/add", portfolioAddData);

                if (response.ok) {
                    console.log("Data have been sent successfully:", response.data);
                } else {
                    console.error("Sending failed:", await response.json());
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        },

        deletePortfolioConfirmation(id) {
            this.deleteItemId = id;
            this.showDeleteConfirmation = true;
        },

        confirmDelete() {
            this.deletePortfolio(this.deleteItemId);
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

        sortTableByShares() {
            this.boxes.sort((a, b) => b.shares - a.shares);
        },

        sortTableByBuy() {
            this.boxes.sort((a, b) => b.buy - a.buy);
        },

        sortTableBySell() {
            this.boxes.sort((a, b) => b.sell - a.sell);
        },

        sortTableByInterestBuySell() {
            this.boxes.sort((a, b) => b.interestBuySell - a.interestBuySell);
        },

        sortTableByProfitLossBuySell() {
            this.boxes.sort((a, b) => b.profitLossBuySell - a.profitLossBuySell);
        },

        sortTableByDividend() {
            this.boxes.sort((a, b) => b.dividend - a.dividend);
        },

        sortTableByInterestDividend() {
            this.boxes.sort((a, b) => b.interestDividend - a.interestDividend);
        },

        sortTableByProfitLossDividend() {
            this.boxes.sort((a, b) => b.profitLossDividend - a.profitLossDividend);
        },

        sortTableByProfitLossSum() {
            this.boxes.sort((a, b) => b.sumProfitLoss - a.sumProfitLoss);
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


/* .content {
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
} */

/** CONTENT - MAINBOX */
.mainbox {
    width: 95rem;
    height: 45rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #2b282886;
    /* box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset, 0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12); */
    gap: 1px;
    border-radius: 20px;
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

.portfolio_table {
    height: 3rem;
    width: 87.25rem;
    display: flex;
    align-items: center;
    justify-content: row;
    gap: 1px;
}

.portfolio_table div {
    color: #8f8f8f;
    font-weight: 400;
    font-family: Oswald;
    letter-spacing: 0.5px;
    font-size: 0.89rem;
}




.Ticker {
    height: 2.5rem;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 0 0 5px;
    font-weight: 400;
    background: #393433;
    border: 1px solid #8880805e;

}

.Company {
    height: 2.5rem;
    width: 20rem;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: 400;
    background: #393433;
    border: 1px solid #8880805e;
}

.Shares,
.Buy,
.Sell,
.InterestBuySell,
.ProfitLossBuySell,
.Dividend,
.InterestDividend,
.ProfitLossDividend,
.ProfitLossSum {
    height: 2.5rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-weight: 400;
    background: #393433;
    border: 1px solid #8880805e;
}

.ProfitLossBuySell {
    border: 1px solid #8880805e;
    border-radius: 0 10px 5px 0;
}

.Dividend {
    border: 1px solid #8880805e;
    border-radius: 10px 0 0 5px;
    margin-left: 0.75rem;
}

.ProfitLossDividend {
    border: 1px solid #8880805e;
    border-radius: 0 10px 5px 0;
}

.ProfitLossSum {
    border: 1px solid #8880805e;
    border-radius: 10px 10px 5px 5px;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
}

.Edit_remove {
    height: 2.5rem;
    width: 7rem;
}

.Company:hover,
.Shares:hover,
.Buy:hover,
.Sell:hover,
.InterestBuySell:hover,
.ProfitLossBuySell:hover,
.Dividend:hover,
.InterestDividend:hover,
.ProfitLossDividend:hover,
.ProfitLossSum:hover {
    background-color: #d4ad4262;
    cursor: pointer;
}



.portfolio_table_icon {
    color: #686868;
    font-size: 1.25rem;
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
    height: 2rem;
    width: 87.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1px;
    margin-bottom: 3px;
}




.ticker_box {
    height: 2rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    letter-spacing: 0.05rem;
    font-weight: 400;
    border: 1px solid #8880805e;
    background: #434343;
    background: radial-gradient(at center, #3d3b3b, #383436);
    color: #807f7f;
    font-family: sans-serif;
    border-radius: 5px 0 0 5px;
}


.company_box {
    height: 2rem;
    width: 20rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    border: 1px solid #8880805e;
    background: #434343;
    background: radial-gradient(at center, #3d3b3b, #383436);
    font-size: 0.8rem;
    color: rgba(8, 172, 236, 0.918);
    font-family: sans-serif;
    letter-spacing: 0.5px;
}

.edit_remove {
    height: 2rem;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 3px;
}

.edit_remove_button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
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



.shares_box,
.buy_box,
.sell_box,
.interestBuySell_box,
.dividend_box,
.interestDividend_box {
    color: #89909b;
    font-size: 0.8rem;
    font-family: sans-serif;
    height: 2rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-weight: 300;
    border: 1px solid #8880805e;
    background: #434343;
    background: radial-gradient(at center, #3d3b3b, #383436);

}

.profitLossBuySell_box_normal,
.profitLossDividend_box_normal {
    height: 2rem;
    width: 6rem;
    background: #434343;
    background: radial-gradient(at center, #3d3b3b, #383436);
    font-size: 0.8rem;
    color: #c9c9c9;
    font-family: sans-serif;
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-weight: 300;
    border: 1px solid #8880805e;
    background: #434343;
    background: radial-gradient(at center, #3d3b3b, #383436);
}

.profitLossBuySell_box_profit,
.profitLossDividend_box_profit {
    height: 2rem;
    width: 6rem;
    background: #434343;
    background: radial-gradient(at center, #3d3b3b, #383436);
    font-size: 0.8rem;
    color: #6cc06c;
    font-family: sans-serif;
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-weight: 300;
    border: 1px solid #8880805e;
    background: #434343;
    background: radial-gradient(at center, #3d3b3b, #383436);
}

.profitLossBuySell_box_loss,
.profitLossDividend_box_loss {
    height: 2rem;
    width: 6rem;
    background: #434343;
    background: radial-gradient(at center, #3d3b3b, #383436);
    font-size: 0.8rem;
    color: #e0454b;
    font-family: sans-serif;
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-weight: 300;
    border: 1px solid #8880805e;
    background: #434343;
    background: radial-gradient(at center, #3d3b3b, #383436);
}


.dividend_box {
    margin-left: 0.75rem;
    border-radius: 5px 0 0 5px;
}

.sumProfitLoss_box_profit {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    background: rgba(198, 239, 206, 0.082);
    color: #6cc06c;
    font-family: sans-serif;
    font-weight: 300;
    border-radius: 5px;
    height: 2rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    border: 1px solid #8880805e;
}

.sumProfitLoss_box_loss {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    background: #e0454a1f;
    color: #e0454b;
    font-family: sans-serif;
    font-weight: 300;
    border-radius: 5px;
    height: 2rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    border: 1px solid #8880805e;
}

.sumProfitLoss_normal {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    background: #c9c9c934;
    background: radial-gradient(at center, #3d3b3b, #383436);
    color: #c9c9c9;
    font-family: sans-serif;
    font-weight: 300;
    border-radius: 5px;
    height: 2rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    border: 1px solid #8880805e;
}





/** PAGE PANEL */
.pages_panel {
    height: 2rem;
    width: 85rem;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 10px;
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
    height: 35rem;
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
.shares_add_box,
.buy_add_box,
.sell_add_box,
.interestBuySell_add_box,
.profitLossBuySell_add_box,
.dividend_add_box,
.interestDividend_add_box,
.profitLossDividend_add_box,
.sumProfitLoss_add_box {
    display: flex;
    flex-direction: row;
    justify-content: center;
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



/** SUM BOX */

.value_sum_box {
    height: 2.5rem;
    width: 30.1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    font-size: 1rem;
    border: 1px solid #8880805e;
    background: #393433;
    border-radius: 5px 0 0 10px;
    font-weight: 400;
    margin-top: 20px;
    font-family: Oswald;
    color: #8f8f8f;
}

.edit_sum_remove {
    height: 2.5rem;
    width: 7rem;
    gap: 1px;
    background: none;
    margin-top: 20px;
}

.buy_sum_box,
.sell_sum_box,
.interestBuySell_sum_box,
.profitLossBuySell_sum_box,
.dividend_sum_box,
.interestDividend_sum_box,
.profitLossDividend_sum_box {
    height: 2.5rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-weight: 400;
    font-size: 1rem;
    border: 1px solid #8880805e;
    background: #393433;
    margin-top: 20px;
    color: #807f7f;
    font-family: sans-serif;
}

.profitLossBuySell_sum_box,
.profitLossDividend_sum_box {
    border-radius: 0 5px 10px 0;
}


.dividend_sum_box {
    border-radius: 5px 0 0 10px;
    margin-left: 0.75rem;
}

.sumProfitLoss_sum_box {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    border-radius: 5px 5px 10px 10px;
    height: 2.5rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-weight: 400;
    font-size: 1rem;
    border: 1px solid #8880805e;
    background: #393433;
    margin-top: 20px;
    color: #807f7f;
    font-family: sans-serif;
}

.sumProfitLoss_sum_box_profit {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    border-radius: 5px 5px 10px 10px;
    height: 2.5rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-weight: 400;
    font-size: 1rem;
    border: 1px solid #8880805e;
    background: rgba(198, 239, 206, 0.082);
    margin-top: 20px;
    color: #6cc06c;
    font-family: sans-serif;
}


.sumProfitLoss_sum_box_loss {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    border-radius: 5px 5px 10px 10px;
    height: 2.5rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-weight: 400;
    font-size: 1rem;
    border: 1px solid #8880805e;
    background: #e0454a1f;
    margin-top: 20px;
    color: #e0454b;
    font-family: sans-serif;
}


.sumProfitLoss_sum_box_normal {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    border-radius: 5px 5px 10px 10px;
    height: 2.5rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-weight: 400;
    font-size: 1rem;
    border: 1px solid #8880805e;
    background: #393433;
    margin-top: 20px;
    color: #c9c9c9;
    font-family: sans-serif;
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
</style>

