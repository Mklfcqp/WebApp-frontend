<!-- 
                        <Icon icon="fxemoji:stockchart" class="header_icon" />
                        <h1>STOCK</h1>
                        <h3>Watchlist</h3>


</style>
 -->

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

                                <div class="dividend_yield_add_box">

                                    <div class="input_format">
                                        <input v-model="newBox.dividendYield" type="text" id="dividendYield" required
                                            class="add_form_input_double_1" placeholder="" />
                                        <label for="dividendYield" class="add_box_label">DIVIDEND YIELD
                                            (%)</label>
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
                                        <input v-model="newBox.currencyDividendQ" type="text" id="currencyDividendQ"
                                            required class="add_form_input_double_2" value="USD" />
                                    </div>
                                </div>

                                <div class="dividend_y_add_box">
                                    <div class="input_format">
                                        <input v-model="newBox.dividendY" type="text" id="dividendY" required
                                            class="add_form_input_double_1" placeholder="" />
                                        <label for="dividendY" class="add_box_label">DIVIDEND - YEAR</label>
                                    </div>

                                    <div class="input_format">
                                        <input v-model="newBox.currencyDividendY" type="text" id="currencyDividendY"
                                            required class="add_form_input_double_2" value="USD" />
                                    </div>
                                </div>

                                <div class="add_form_buttons">
                                    <button type="submit" @click="addStockToWatchlist" class="add_form_button">Add</button>
                                    <button type="button" @click="cancelAdd" class="add_form_button">Cancel</button>
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

                                <div class="dividend_yield_add_box">

                                    <div class="input_format">
                                        <input v-model="updateBox.dividendYield" type="text" id="dividendYield" required
                                            class="add_form_input_double_1" placeholder="" />
                                        <label for="dividendYield" class="add_box_label">DIVIDEND YIELD
                                            (%)</label>
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
                                        <input v-model="updateBox.currencyDividendQ" type="text" id="currencyDividendQ"
                                            required class="add_form_input_double_2" value="USD" />
                                    </div>
                                </div>

                                <div class="dividend_y_add_box">
                                    <div class="input_format">
                                        <input v-model="updateBox.dividendY" type="text" id="dividendY" required
                                            class="add_form_input_double_1" placeholder="" />
                                        <label for="dividendY" class="add_box_label">DIVIDEND - YEAR</label>
                                    </div>

                                    <div class="input_format">
                                        <input v-model="updateBox.currencyDividendY" type="text" id="currencyDividendY"
                                            required class="add_form_input_double_2" value="USD" />
                                    </div>
                                </div>

                                <div class="add_form_buttons">
                                    <button type="submit" @click="updateWatchlist()" class="add_form_button">Update</button>
                                    <button type="button" @click="cancelAdd" class="add_form_button">Cancel</button>
                                </div>

                            </form>
                        </div>



                        <table>
                            <thead>
                                <tr class="watchlist_table">

                                    <th scope="col" class="Ticker">
                                        <div>Ticker</div>
                                    </th>
                                    <th scope="col" class="Company">
                                        <Icon icon="mdi:alphabet-a" class="watchlist_table_icon" />
                                        <div>Company</div>
                                    </th>
                                    <th scope="col" class="Current_Price">
                                        <Icon icon="foundation:dollar" class="watchlist_table_icon" />
                                        <div>Current Price</div>
                                    </th>
                                    <th scope="col" class="DCF">
                                        <Icon icon="foundation:dollar" class="watchlist_table_icon" />
                                        <div>DCF</div>
                                    </th>
                                    <th scope="col" class="Dividend_Yield">
                                        <Icon icon="material-symbols:percent" class="watchlist_table_icon" />
                                        <div>Dividend Yield</div>
                                    </th>
                                    <th scope="col" class="Dividend_Q">
                                        <Icon icon="solar:dollar-line-duotone" class="watchlist_table_icon" />
                                        <div>Dividend(Q)</div>
                                    </th>
                                    <th scope="col" class="Dividend_Y">
                                        <Icon icon="solar:dollar-outline" class="watchlist_table_icon" />
                                        <div>Dividend(Y)</div>
                                    </th>
                                    <th scope="col" class="Disparity">
                                        <Icon icon="material-symbols:percent" class="watchlist_table_icon" />
                                        <div>Disparity</div>
                                    </th>

                                    <th scope="col" class="Edit_remove"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="box in boxes" :key="box.id" class="added_form">
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
                                            <Icon icon="mdi:edit-outline" />
                                        </button>
                                        <button class="edit_remove_button" @click="deleteWatchlist(box.id)">
                                            <Icon icon="mingcute:delete-fill" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

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

export default {

    components: {
        TNavbar,
        Icon,
        TBackground
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
                dividendYield: "",
                dividendQ: "",
                currencyDividendQ: "USD",
                dividendY: "",
                currencyDividendY: "USD",
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
                dividendYield: "",
                dividendQ: "",
                currencyDividendQ: "",
                dividendY: "",
                currencyDividendY: "",
            },
            selectedBoxId: null,
        }
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
            fetch('http://localhost:8080/watchlist/load')
                .then(res => res.json())
                .then(data => {
                    this.boxes = data
                    console.log(data)
                })
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
                    dividendY: this.updateBox.dividendY,
                    currencyDividendY: this.updateBox.currencyDividendY,
                    dividendYield: this.updateBox.dividendYield
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


        deleteWatchlist(id) {
            fetch(`http://localhost:8080/watchlist/delete/${id}`, {
                method: 'DELETE'
            })
                .then(data => {
                    console.log(data)
                    this.getWatchlists()
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
                    dividendY: this.newBox.dividendY,
                    currencyDividendY: this.newBox.currencyDividendY,
                    dividendYield: this.newBox.dividendYield
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
    border: 1px solid yellow;
}

.top_filling {
    height: 3rem;
    border-bottom: 1px solid #8880805e;
    border: 1px solid red;
}

/** CONTENT - MAINBOX */
.mainbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    border: 1px solid white;
}

.sorted {
    height: 2rem;
    width: 100%;
    border: 1px solid green;
}

.watchlist_table {
    height: 2rem;
    width: 85rem;
    border: 1px solid #8880805e;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: center;
    justify-content: row;
    background: #e9e8e8;



}

.watchlist_table div {
    color: black;
}

.Ticker {
    height: 2rem;
    width: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 0 0 0;
    font-weight: 400;
}

.Company {
    height: 2rem;
    width: 27rem;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: 400;
}

.Disparity {
    height: 2rem;
    width: 23rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
}

.Edit_remove {
    height: 2rem;
    width: 7rem;
}


.Current_Price,
.DCF,
.Dividend_Yield,
.Dividend_Q,
.Dividend_Y {
    height: 2rem;
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
    background-color: #dba613a1;
    cursor: pointer;
}

.watchlist_table_icon {
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
    width: 85rem;
    border: 1px solid #8880805e;
    border-radius: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    /* kazdy druhy bude mit jinou barvu */
}

.ticker_box {
    height: 2rem;
    width: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    letter-spacing: 0.05rem;
    font-weight: 300;
    color: #a3a3a3;
}


.company_box {
    height: 2rem;
    width: 27rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    font-size: 1.1rem;

}

.disparity_box {
    height: 2rem;
    width: 23rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.disparity_normal {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 10rem;
    background: rgb(224, 224, 224);
    font-size: 0.9rem;
}

.disparity_overvalued {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 10rem;
    background: #fac193;
    font-size: 0.9rem;
    color: #9C0006;
}

.disparity_undervalued {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 10rem;
    background: #C6EFCE;
    font-size: 0.9rem;
    color: #006100;
}

.edit_remove {
    height: 2rem;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1px;
}

.edit_remove_button {
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    background: #00b0b3a8;
    border-radius: 3px;
    border: 1px solid black;
}

.edit_remove_button:hover {
    background: #e0a942d3;
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
    font-weight: 300;
    font-size: 1rem;
}



.currency {
    font-size: 0.7rem;
    color: #b8b8b8;
    letter-spacing: 1px;
    font-family: Oswald;
    font-weight: 400;
    padding-top: 5px;
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
    height: 30rem;
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
.price_add_box,
.dcf_add_box,
.dividend_yield_add_box,
.dividend_q_add_box,
.dividend_y_add_box {
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    gap: 10px;
}

.add_form_input_double_1 {
    width: 12rem;
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
</style>