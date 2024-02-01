<template>
    <main>
        <TBackground />
        <TNavbar />
        <section>
            <div class="content">
                <div class="content1">

                    <div class="top_filling"></div>

                    <div class="mainbox">

                        <div class="sorted"></div>


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
                                    <button type="submit" @click="addStockToPortfolio" class="add_form_button">Add</button>
                                    <button type="button" @click="cancelAdd" class="add_form_button">Cancel</button>
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
                                        <input v-model="updateBox.interestDividend" type="text" id="interestDividend"
                                            required class="add_form_input_double_1" placeholder="" />
                                        <label for="interestDividend" class="add_box_label">DIVIDEND - INTEREST</label>
                                    </div>
                                </div>


                                <div class="add_form_buttons">
                                    <button type="submit" @click="updatePortfolio()" class="add_form_button">Update</button>
                                    <button type="button" @click="cancelAdd" class="add_form_button">Cancel</button>
                                </div>

                            </form>
                        </div>





                        <table>
                            <thead>
                                <tr class="portfolio_table">



                                    <th scope="col" class="Ticker">
                                        <div>Ticker</div>
                                    </th>
                                    <th scope="col" class="Company">
                                        <Icon icon="mdi:alphabet-a" class="portfolio_table_icon" />
                                        <div>Company</div>
                                    </th>
                                    <th scope="col" class="Shares">

                                        <div>Shares</div>
                                    </th>
                                    <th scope="col" class="Buy">

                                        <div>Buy</div>
                                    </th>
                                    <th scope="col" class="Sell">

                                        <div>Sell</div>
                                    </th>
                                    <th scope="col" class="InterestBuySell">

                                        <div>Interest</div>
                                    </th>
                                    <th scope="col" class="ProfitLossBuySell">

                                        <div>Profit/Loss </div>
                                    </th>



                                    <th scope="col" class="Dividend">

                                        <div>Dividend</div>
                                    </th>
                                    <th scope="col" class="InterestDividend">

                                        <div>Interest</div>
                                    </th>
                                    <th scope="col" class="ProfitLossDividend">

                                        <div>Profit/Loss</div>
                                    </th>

                                    <th scope="col" class="ProfitLossSum">

                                        <div>Profit/Loss</div>
                                    </th>



                                    <th scope="col" class="Edit_remove"></th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="box in boxes" :key="box.id" class="added_form">
                                    <th scope="row" class="hidden-id">{{ box.id }}</th>
                                    <td class="ticker_box">{{ box.ticker }}</td>
                                    <td class="company_box">{{ box.company }}</td>
                                    <td class="shares_box">{{ box.shares }}</td>
                                    <td class="buy_box">{{ box.buy }}</td>
                                    <td class="sell_box">{{ box.sell }}</td>
                                    <td class="interestBuySell_box">{{ box.interestBuySell }}</td>
                                    <td class="profitLossBuySell_box">{{ box.profitLossBuySell }}</td>
                                    <td class="dividend_box">{{ box.dividend }}</td>
                                    <td class="interestDividend_box">{{ box.interestDividend }}</td>
                                    <td class="profitLossDividend_box">{{ box.profitLossDividend }}</td>
                                    <td class="sumProfitLoss_box">{{ box.sumProfitLoss }}</td>

                                    <td class="edit_remove">
                                        <button class="edit_remove_button" @click="loadPortfolioForEdit(box.id)">
                                            <Icon icon="mdi:edit-outline" />
                                        </button>
                                        <button class="edit_remove_button" @click="deletePortfolio(box.id)">
                                            <Icon icon="mingcute:delete-fill" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!--
        <table>
        <thead>
            <tr v-for="sumBox in sumBoxes" :key="sumBox.id" class="added_form">
                <th scope="row" class="hidden-id">{{ sumBox.id }}</th>
                <td class="value_sum_box"></td>
                <td class="buy_sum_box">{{ sumBox.buy }}</td>
                <td class="sell_sum_box">{{ sumBox.sell }}</td>
                <td class="interestBuySell_sum_box">{{ sumBox.interestBuySell }}</td>
                <td class="profitLossBuySell_sum_box">{{ sumBox.profitLossBuySell }}</td>
                <td class="dividend_sum_box">{{ sumBox.dividend }}</td>
                <td class="interestDividend_sum_box">{{ sumBox.interestDividend }}</td>
                <td class="profitLossDividend_sum_box">{{ sumBox.profitLossDividend }}</td>
                <td class="sumProfitLoss_sum_box">{{ sumBox.sumProfitLoss }}</td>

                <td class="edit_sum_remove">

                </td>
            </tr>
        </thead>
    </table>
    -->

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
        }
    },

    beforeMount() {
        this.getPortfolio()
        /*this.getPortfolioSUM()*/
    },

    methods: {
        loadPortfolioForEdit(id) {
            this.selectedBoxId = id;
            this.showEditForm = true;
            const selectedBox = this.boxes.find(box => box.id === id);
            this.updateBox = { ...selectedBox };
        },

        getPortfolio() {
            fetch('http://localhost:8080/portfolio/load')
                .then(res => res.json())
                .then(data => {
                    this.boxes = data
                    console.log(data)
                })
                
        },

        /*async getPortfolio() {
            try {
                const response = await db.get('http://localhost:8080/portfolio/load');

                if (response.ok) {
                    const data = await response.json();
                    this.boxes = data;
                    console.log("Data have been loaded successfully:", data);
                } else {
                    console.error("Loading failed:", await response.json());
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        },*/

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


        deletePortfolio(id) {
            fetch(`http://localhost:8080/portfolio/delete/${id}`, {
                method: 'DELETE'
            })
                .then(data => {
                    console.log(data)
                    this.$router.push('/portfolioENG');
                })
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

        /*getPortfolio() {
            fetch('http://localhost:8080/portfolio/load/sum')
                .then(res => res.json())
                .then(data => {
                    this.sumBoxes = data
                    console.log(data)
                })
        },*/


    }

}

</script>




<style scoped>
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


.content {
    width: 100rem;
    height: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(2px);
    border-radius: 20px;
    box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset, 0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);
    z-index: 10;
}

/** CONTENT - MAINBOX */

/** CONTENT */

.content1 {
    border: none;
    height: auto;
    width: 70%;
    margin: auto;
    position: relative;
}

.top_filling {
    height: 3rem;
    border-bottom: 1px solid #8880805e;
}

/** CONTENT - MAINBOX */
.mainbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
}

.sorted {
    height: 2rem;
    width: 100%;
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
    color: black;

}




.Ticker {
    height: 2.5rem;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 0 0 0;
    font-weight: 400;
    background: #e9e8e8;
    border: 1px solid #8880805e;

}

.Company {
    height: 2.5rem;
    width: 20rem;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: 400;
    background: #e9e8e8;
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
    background: #e9e8e8;
    border: 1px solid #8880805e;
}

.ProfitLossBuySell {
    border: 1px solid #8880805e;
    border-radius: 0 10px 0 0;
}

.Dividend {
    border: 1px solid #8880805e;
    border-radius: 10px 0 0 0;
    margin-left: 0.75rem;
}

.ProfitLossDividend {
    border: 1px solid #8880805e;
    border-radius: 0 10px 0 0;
}

.ProfitLossSum {
    border: 1px solid #8880805e;
    border-radius: 10px 10px 0 0;
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
    background-color: #dba613a1;
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

}

.bot_box {
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    border: none;
}

.bot_box_icon {
    background-color: #979797bd;
    color: #b4b2b25e;
    border: none;
    border-radius: 5px 0 0 5px;
    height: 2.2rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.bot_icon {
    font-size: 1.5rem;
    color: #5252525e;
}

.bot_box_button {
    background-color: #e0e0e0bd;
    color: #2e2e2e5e;
    border: none;
    border-radius: 0 5px 5px 0;
    height: 2.2rem;
    width: 15rem;
    font-size: 1rem;
    font-family: Oswald;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

}

.bot_box:hover {
    background-color: #f1b307;
    cursor: pointer;
}

.header_icon {
    font-size: 1.75rem;
}


/** ADDED FORM */

.added_form {
    height: 2rem;
    width: 87.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1px;
}




.ticker_box {
    height: 2rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    letter-spacing: 0.05rem;
    font-weight: 300;
    color: #a3a3a3;
    border: 1px solid #8880805e;
}


.company_box {
    height: 2rem;
    width: 20rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    font-size: 1.1rem;
    border: 1px solid #8880805e;
}

.edit_remove {
    height: 2rem;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1px;
    background: hsl(216, 33%, 98%);
}

.edit_remove_button {
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    background: #00b0b3a8;
    border-radius: 3px;
    border: 1px solid black;
}

.edit_remove_button:hover {
    background: #e0a942d3;
}



.shares_box,
.buy_box,
.sell_box,
.interestBuySell_box,
.profitLossBuySell_box,
.dividend_box,
.interestDividend_box,
.profitLossDividend_box,
.sumProfitLoss_box {
    height: 2rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    gap: 5px;
    font-weight: 300;
    font-size: 1rem;
    border: 1px solid #8880805e;

}

.shares_box,
.buy_box,
.sell_box,
.interestBuySell_box,
.dividend_box,
.interestDividend_box {
    color: #89909b;
    font-size: 0.7rem;
}

.profitLossBuySell_box,
.profitLossDividend_box {
    font-weight: 300;
    font-size: 0.9rem;
    background: #e9e8e8;
}

.sumProfitLoss_box {
    font-weight: 300;
}

.dividend_box {
    margin-left: 0.75rem;
}

.sumProfitLoss_box {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    background: #d6d6d6;
}


/** ADD FORM */

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add_form {
    height: 35rem;
    width: 25rem;
    border: 1px solid #7D8491;
    border-radius: 5px;
    background-color: #d19f41;
    z-index: 1000;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
}

.add_form_description {
    border-bottom: 1px solid #000000;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-size: 1.75rem;
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
    width: 15rem;
    height: 2rem;
    border: 1px solid #3A606E;
    border-radius: 3px;
    padding-block: 0.8rem;
    background: none;
    position: relative;
    padding-left: 10px;
}

.add_form_input_double_2 {
    width: 3rem;
    height: 2rem;
    background: none;
    border: 1px solid #3A606E;
    border-radius: 3px;
    padding-left: 10px;
}

.add_form_input_double_1:focus,
.add_form_input_double_2:focus {
    outline: none;
    border: 1px solid black;
}

.input_format {
    position: relative;
    display: flex;
    align-items: center;

}

.input_format label {
    color: #3A606E;
    letter-spacing: 0.05rem;
    font-size: 0.8rem;
}

.add_box_label {
    position: absolute;
    left: 10px;
    transition: top 0.3s, font-size 0.3s;
    background-color: #d19f41;
}


.add_form_input_double_1:focus+.add_box_label {
    top: -10px;
    font-size: 0.7rem;
    left: 0.8rem;
    font-weight: 400;
    color: black;
}

.add_form_input_double_1:not(:placeholder-shown).add_form_input_double_1:not(:focus)+.add_box_label {
    top: -10px;
    font-size: 0.7rem;
    left: 0.8rem;
    font-weight: 400;
    color: #3A606E;
}

.add_form_buttons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;
    border-top: 1px solid #000000;
}

.add_form_button {
    border: 1px solid #3A606E;
    width: 5rem;
    height: 2rem;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
}

.add_form_button:hover {
    background: #00CED1;
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
    border-radius: 0 0 0 10px;
    font-weight: 400;
    background: #e9e8e8;
}

.edit_sum_remove {
    height: 2.5rem;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1px;
    background: hsl(216, 33%, 98%);
}

.buy_sum_box,
.sell_sum_box,
.interestBuySell_sum_box,
.profitLossBuySell_sum_box,
.dividend_sum_box,
.interestDividend_sum_box,
.profitLossDividend_sum_box,
.sumProfitLoss_sum_box {
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
    background: #e9e8e8;

}

.profitLossBuySell_sum_box,
.profitLossDividend_sum_box {
    font-weight: 300;
    font-size: 1rem;
    border: 1px solid #8880805e;
    border-radius: 0 0 10px 0;
}

.sumProfitLoss_sum_box {
    font-weight: 300;
}

.dividend_sum_box {
    border: 1px solid #8880805e;
    border-radius: 0 0 0 10px;
    margin-left: 0.75rem;
}

.sumProfitLoss_sum_box {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
    background: #d6d6d6;
}

.sumProfitLoss_sum_box {
    border: 1px solid #8880805e;
    border-radius: 0 0 10px 10px;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
}


</style>



<!-- 

                    <div class="header">
                        <Icon icon="raphael:piechart" class="header_icon" />
                        <h1>STOCK</h1>
                        <h3>Portfolio</h3>
                    </div>

-->