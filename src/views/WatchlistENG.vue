<template>
    <main>
        <TBackgroundGray />
        <TNavbar />

        <section>
            <div class="content">

                <div class="mainbox">

                    <div class="header">
                        <span class="text1">WATCHLIST</span>
                    </div>

                    <div class="overlay" v-if="showAddForm">
                        <form v-if="showAddForm" class="add_form">

                            <div class="add_form_description">Add Watchlist</div>

                            <div class="box">
                                <div class="box_inside1">
                                    <div class="company_add_box">
                                        <div class="input_format">
                                            <input v-model="newBox.company" type="text" id="company" required
                                                   class="add_form_input_double_1" placeholder="" />
                                            <label for="company" class="add_box_label">COMPANY</label>
                                        </div>
                                    </div>

                                    <div class="ticker_add_box">
                                        <div class="input_format">
                                            <input v-model="newBox.ticker" type="text" id="ticker" required class="add_form_input_double_1"
                                                   placeholder="" />
                                            <label for="ticker" class="add_box_label">TICKER</label>
                                        </div>
                                    </div>


                                    <div class="price_add_box">

                                        <div class="input_format">
                                            <input v-model="newBox.price" type="text" id="price" required class="add_form_input_double_1"
                                                   placeholder="" @input="handleInputChange" />
                                            <label for="price" class="add_box_label">CURRENT PRICE</label>
                                        </div>

                                        <div class="input_format">
                                            <input v-model="newBox.currencyPrice" type="text" id="currencyPrice" required
                                                   class="add_form_input_double_2" value="USD" />
                                        </div>



                                    </div>

                                    <div class="dividend_q_add_box">
                                        <div class="input_format">
                                            <input v-model="newBox.dividendQ" type="text" id="dividendQ" required
                                                   class="add_form_input_double_1" placeholder="" @input="handleInputChange" />
                                            <label for="dividendQ" class="add_box_label">DIVIDEN -
                                                QUARTERLY</label>
                                        </div>


                                        <div class="input_format">
                                            <input v-model="newBox.currencyDividendQ" type="text" id="currencyDividendQ" required
                                                   class="add_form_input_double_2" value="USD" />
                                        </div>
                                    </div>

                                    <div class="dcf_manual_add_box">
                                        <div class="dcf_manual_add_box_description">DCF - Manual input</div>

                                        <div class="dcf_manual_add_box_value">

                                            <div class="input_format">
                                                <input v-model="newBox.dcfWithMarginOfSafety" type="text" id="dcfWithMarginOfSafety"
                                                       class="add_form_input_double_1" placeholder="" @input="handleInputChange">
                                                <label for="dcfWithMarginOfSafety" class="add_box_label">DCF - MANUAL</label>
                                            </div>


                                            <div class="input_format">
                                                <input v-model="newBox.currencyDcf" type="text" id="currencyDcf" required
                                                       class="add_form_input_double_2" value="USD" />
                                            </div>


                                        </div>
                                    </div>

                                </div>

                                <div class="box_inside2">
                                    <div class="box_inside2_description">DCF - calculation</div>
                                    <div class="box_inside2_inside">

                                        <div class="box_inside2_free_cash_flow">
                                            <div class="input_format">
                                                <input v-model="newBox.freeCashFlow0" type="text" id="freeCashFlow0"
                                                       class="add_form_input_free_cash_flow" placeholder="" @input="handleInputChange">
                                                <label for="freeCashFlow0" class="add_box_label">FCF CURRENT YEAR</label>
                                            </div>

                                            <div class="input_format">
                                                <input v-model="newBox.freeCashFlow1" type="text" id="freeCashFlow1"
                                                       class="add_form_input_free_cash_flow" placeholder="" @input="handleInputChange">
                                                <label for="freeCashFlow1" class="add_box_label">FCF CURRENT YEAR - 1</label>
                                            </div>


                                            <div class="input_format">
                                                <input v-model="newBox.freeCashFlow2" type="text" id="freeCashFlow2"
                                                       class="add_form_input_free_cash_flow" placeholder="" @input="handleInputChange">
                                                <label for="freeCashFlow2" class="add_box_label">FCF CURRENT YEAR - 2</label>
                                            </div>

                                            <div class="input_format">
                                                <input v-model="newBox.freeCashFlow3" type="text" id="freeCashFlow3"
                                                       class="add_form_input_free_cash_flow" placeholder="" @input="handleInputChange">
                                                <label for="freeCashFlow3" class="add_box_label">FCF CURRENT YEAR - 3</label>
                                            </div>

                                            <div class="input_format">
                                                <input v-model="newBox.freeCashFlow4" type="text" id="freeCashFlow4"
                                                       class="add_form_input_free_cash_flow" placeholder="" @input="handleInputChange">
                                                <label for="freeCashFlow4" class="add_box_label">FCF CURRENT YEAR - 4</label>
                                            </div>

                                            <div class="input_format">
                                                <input v-model="newBox.freeCashFlow5" type="text" id="freeCashFlow5"
                                                       class="add_form_input_free_cash_flow" placeholder="" @input="handleInputChange">
                                                <label for="freeCashFlow5" class="add_box_label">FCF CURRENT YEAR - 5</label>
                                            </div>


                                        </div>
                                        <div class="box2_financial">

                                            <div class="input_format">
                                                <input v-model="newBox.growthRate" type="text" id="growthRate"
                                                       class="add_form_input_double_1" placeholder="" @input="handleInputChange">
                                                <label for="growthRate" class="add_box_label">GROWTH RATE</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="newBox.perpetualGrowthRate" type="text" id="perpetualGrowthRate"
                                                       class="add_form_input_double_1" placeholder="" @input="handleInputChange">
                                                <label for="perpetualGrowthRate" class="add_box_label">PERPETUAL GROWTH RATE</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="newBox.discountRate" type="text" id="discountRate"
                                                       class="add_form_input_double_1" placeholder="" @input="handleInputChange">
                                                <label for="discountRate" class="add_box_label">DISCOUNT RATE</label>
                                            </div>


                                            <div class="input_format">
                                                <input v-model="newBox.cash" type="text" id="cash" class="add_form_input_double_1"
                                                       placeholder="" @input="handleInputChange">
                                                <label for="cash" class="add_box_label">CASH & CASH EQUIVALENTS</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="newBox.totalDebt" type="text" id="totalDebt" class="add_form_input_double_1"
                                                       placeholder="" @input="handleInputChange">
                                                <label for="totalDebt" class="add_box_label">TOTAL DEBT</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="newBox.sharesOutstanding" type="text" id="sharesOutstanding"
                                                       class="add_form_input_double_1" placeholder="" @input="handleInputChange">
                                                <label for="sharesOutstanding" class="add_box_label">SHARES OUTSTANDING</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="add_form_buttons">
                                <div @click="addManualWatchlist" class="add_form_button">ADD MANUAL</div>
                                <div @click="addCalculatingWatchlist" class="add_form_button">ADD CALCULATING</div>
                                <div @click="cancelAdd" class="add_form_button">CANCEL</div>
                            </div>
                        </form>
                    </div>



                    <div class="overlay" v-if="showEditForm">
                        <form v-if="showEditForm" class="add_form">

                            <div class="add_form_description">Update Watchlist</div>

                            <div class="box">
                                <div class="box_inside1">
                                    <div class="company_add_box">
                                        <div class="input_format">
                                            <input v-model="updateBox.company" type="text" id="company" required
                                                   class="add_form_input_double_1" placeholder="" />
                                            <label for="company" class="add_box_label">COMPANY</label>
                                        </div>
                                    </div>

                                    <div class="ticker_add_box">
                                        <div class="input_format">
                                            <input v-model="updateBox.ticker" type="text" id="ticker" required class="add_form_input_double_1"
                                                   placeholder="" />
                                            <label for="ticker" class="add_box_label">TICKER</label>
                                        </div>
                                    </div>


                                    <div class="price_add_box">

                                        <div class="input_format">
                                            <input v-model="updateBox.price" type="text" id="price" required class="add_form_input_double_1"
                                                   placeholder="" @input="handleInputChange" />
                                            <label for="price" class="add_box_label">CURRENT PRICE</label>
                                        </div>

                                        <div class="input_format">
                                            <input v-model="updateBox.currencyPrice" type="text" id="currencyPrice" required
                                                   class="add_form_input_double_2" value="USD" @input="handleInputChangeToUpperCase"/>
                                        </div>



                                    </div>

                                    <div class="dividend_q_add_box">
                                        <div class="input_format">
                                            <input v-model="updateBox.dividendQ" type="text" id="dividendQ" required
                                                   class="add_form_input_double_1" placeholder="" @input="handleInputChange" />
                                            <label for="dividendQ" class="add_box_label">DIVIDEN -
                                                QUARTERLY</label>
                                        </div>


                                        <div class="input_format">
                                            <input v-model="updateBox.currencyDividendQ" type="text" id="currencyDividendQ" required
                                                   class="add_form_input_double_2" value="USD" @input="handleInputChangeToUpperCase"/>
                                        </div>
                                    </div>

                                    <div class="dcf_manual_add_box">
                                        <div class="dcf_manual_add_box_description">DCF - MANUAL INPUT</div>

                                        <div class="dcf_manual_add_box_value">

                                            <div class="input_format">
                                                <input v-model="updateBox.dcfWithMarginOfSafety" type="text" id="dcfWithMarginOfSafety"
                                                       class="add_form_input_double_1" placeholder="" @input="handleInputChange">
                                                <label for="dcfWithMarginOfSafety" class="add_box_label">DCF - MANUAL</label>
                                            </div>


                                            <div class="input_format">
                                                <input v-model="updateBox.currencyDcf" type="text" id="currencyDcf" required
                                                       class="add_form_input_double_2" value="USD" @input="handleInputChangeToUpperCase"/>
                                            </div>


                                        </div>
                                    </div>

                                </div>

                                <div class="box_inside2">
                                    <div class="box_inside2_description">DCF - CALCULATION</div>
                                    <div class="box_inside2_inside">

                                        <div class="box_inside2_free_cash_flow">
                                            <div class="input_format">
                                                <input v-model="updateBox.freeCashFlow0" type="text" id="freeCashFlow0"
                                                       class="add_form_input_free_cash_flow" placeholder="" @input="handleInputChange">
                                                <label for="freeCashFlow0" class="add_box_label">FCF CURRENT YEAR</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="updateBox.freeCashFlow1" type="text" id="freeCashFlow1"
                                                       class="add_form_input_free_cash_flow" placeholder="" @input="handleInputChange">
                                                <label for="freeCashFlow1" class="add_box_label">FCF CURRENT YEAR - 1</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="updateBox.freeCashFlow2" type="text" id="freeCashFlow2"
                                                       class="add_form_input_free_cash_flow" placeholder="" @input="handleInputChange">
                                                <label for="freeCashFlow2" class="add_box_label">FCF CURRENT YEAR - 2</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="updateBox.freeCashFlow3" type="text" id="freeCashFlow3"
                                                       class="add_form_input_free_cash_flow" placeholder="" @input="handleInputChange">
                                                <label for="freeCashFlow3" class="add_box_label">FCF CURRENT YEAR - 3</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="updateBox.freeCashFlow4" type="text" id="freeCashFlow4"
                                                       class="add_form_input_free_cash_flow" placeholder="" @input="handleInputChange">
                                                <label for="freeCashFlow4" class="add_box_label">FCF CURRENT YEAR - 4</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="updateBox.freeCashFlow5" type="text" id="freeCashFlow5"
                                                       class="add_form_input_free_cash_flow" placeholder="" @input="handleInputChange">
                                                <label for="freeCashFlow5" class="add_box_label">FCF CURRENT YEAR - 5</label>
                                            </div>

                                        </div>
                                        <div class="box2_financial">

                                            <div class="input_format">
                                                <input v-model="updateBox.growthRate" type="text" id="growthRate"
                                                       class="add_form_input_double_1" placeholder="" @input="handleInputChange">
                                                <label for="growthRate" class="add_box_label">GROWTH RATE</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="updateBox.perpetualGrowthRate" type="text" id="perpetualGrowthRate"
                                                       class="add_form_input_double_1" placeholder="" @input="handleInputChange">
                                                <label for="perpetualGrowthRate" class="add_box_label">PERPETUAL GROWTH RATE</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="updateBox.discountRate" type="text" id="discountRate"
                                                       class="add_form_input_double_1" placeholder="" @input="handleInputChange">
                                                <label for="discountRate" class="add_box_label">DISCOUNT RATE</label>
                                            </div>


                                            <div class="input_format">
                                                <input v-model="updateBox.cash" type="text" id="cash" class="add_form_input_double_1"
                                                       placeholder="" @input="handleInputChange">
                                                <label for="cash" class="add_box_label">CASH & CASH EQUVIVALENTS</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="updateBox.totalDebt" type="text" id="totalDebt" class="add_form_input_double_1"
                                                       placeholder="" @input="handleInputChange">
                                                <label for="totalDebt" class="add_box_label">TOTAL DEBT</label>
                                            </div>
                                            <div class="input_format">
                                                <input v-model="updateBox.sharesOutstanding" type="text" id="sharesOutstanding"
                                                       class="add_form_input_double_1" placeholder="" @input="handleInputChange">
                                                <label for="sharesOutstanding" class="add_box_label">SHARES OUTSTANDING</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="add_form_buttons">
                                <div @click="updateManualWatchlist" class="add_form_button">UPDATE MANUAL</div>
                                <div @click="updateCalculatingWatchlist" class="add_form_button">UPDATE CALCULATING</div>
                                <div @click="cancelAdd" class="add_form_button">CANCEL</div>
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
                                <div class="dcf_value">{{ box.dcfWithMarginOfSafety }}</div>
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

                            <th class="hidden-id">{{ box.freeCashFlow0 }}</th>
                            <td class="hidden-id">{{ box.freeCashFlow1 }}</td>
                            <td class="hidden-id">{{ box.freeCashFlow2 }}</td>
                            <td class="hidden-id">{{ box.freeCashFlow3 }}</td>
                            <td class="hidden-id">{{ box.freeCashFlow4 }}</td>
                            <td class="hidden-id">{{ box.freeCashFlow5 }}</td>
                            <td class="hidden-id">{{ box.growthRate }}</td>
                            <td class="hidden-id">{{ box.perpetualGrowthRate }}</td>
                            <td class="hidden-id">{{ box.discountRate }}</td>
                            <td class="hidden-id">{{ box.cash }}</td>
                            <td class="hidden-id">{{ box.totalDebt }}</td>
                            <td class="hidden-id">{{ box.sharesOutstanding }}</td>

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
import TBackgroundGray from '@/components/TBackgroundGray.vue'

export default {

    components: {
        TNavbar,
        Icon,
        TBackgroundGray,

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
                currencyDcf: "USD",
                dividendQ: "",
                currencyDividendQ: "USD",
                freeCashFlow0: "",
                freeCashFlow1: "",
                freeCashFlow2: "",
                freeCashFlow3: "",
                freeCashFlow4: "",
                freeCashFlow5: "",
                growthRate: "",
                perpetualGrowthRate: "",
                discountRate: "",
                cash: "",
                totalDebt: "",
                sharesOutstanding: "",
                dcfWithMarginOfSafety: "",
            },

            box: {
                ticker: "",
                company: "",
                price: "",
                currencyPrice: "",
                currencyDcf: "",
                dividendQ: "",
                currencyDividendQ: "",
                freeCashFlow0: "",
                freeCashFlow1: "",
                freeCashFlow2: "",
                freeCashFlow3: "",
                freeCashFlow4: "",
                freeCashFlow5: "",
                growthRate: "",
                perpetualGrowthRate: "",
                discountRate: "",
                cash: "",
                totalDebt: "",
                sharesOutstanding: "",
                dcfWithMarginOfSafety: "",

            },
            showEditForm: false,
            updateBox: {
                id: "",
                ticker: "",
                company: "",
                price: "",
                currencyPrice: "USD",
                currencyDcf: "USD",
                dividendQ: "",
                currencyDividendQ: "USD",
                freeCashFlow0: "",
                freeCashFlow1: "",
                freeCashFlow2: "",
                freeCashFlow3: "",
                freeCashFlow4: "",
                freeCashFlow5: "",
                growthRate: "",
                perpetualGrowthRate: "",
                discountRate: "",
                cash: "",
                totalDebt: "",
                sharesOutstanding: "",
                dcfWithMarginOfSafety: "",
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

            axios.get('https://webapp-backend-production.up.railway.app/watchlist/load', { headers })
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

        async updateCalculatingWatchlist() {
            try {
                if (this.selectedBoxId === null) {
                    console.error("No selected box ID.");
                    return;
                }

                const watchlistUpdateCalculatingData = {
                    id: this.selectedBoxId,
                    ticker: this.updateBox.ticker,
                    company: this.updateBox.company,
                    price: this.updateBox.price,
                    currencyPrice: this.updateBox.currencyPrice,
                    currencyDcf: this.updateBox.currencyDcf,
                    dividendQ: this.updateBox.dividendQ,
                    currencyDividendQ: this.updateBox.currencyDividendQ,
                    currencyDividendY: this.updateBox.currencyDividendQ,
                    freeCashFlow0: this.updateBox.freeCashFlow0,
                    freeCashFlow1: this.updateBox.freeCashFlow1,
                    freeCashFlow2: this.updateBox.freeCashFlow2,
                    freeCashFlow3: this.updateBox.freeCashFlow3,
                    freeCashFlow4: this.updateBox.freeCashFlow4,
                    freeCashFlow5: this.updateBox.freeCashFlow5,
                    growthRate: this.updateBox.growthRate,
                    perpetualGrowthRate: this.updateBox.perpetualGrowthRate,
                    discountRate: this.updateBox.discountRate,
                    cash: this.updateBox.cash,
                    totalDebt: this.updateBox.totalDebt,
                    sharesOutstanding: this.updateBox.sharesOutstanding,
                };

                const response = await db.put(`/watchlist/update/calc`, watchlistUpdateCalculatingData);

                this.showEditForm = false;
                this.$router.go(0);

                if (response.ok) {
                    console.log("Data have been sent successfully:", response.data);
                } else {
                    console.error("Sending failed:", await response.json());
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        },


        async updateManualWatchlist() {
            try {
                if (this.selectedBoxId === null) {
                    console.error("No selected box ID.");
                    return;
                }

                const watchlistUpdateManualData = {
                    id: this.selectedBoxId,
                    ticker: this.updateBox.ticker,
                    company: this.updateBox.company,
                    price: this.updateBox.price,
                    currencyPrice: this.updateBox.currencyPrice,
                    currencyDcf: this.updateBox.currencyDcf,
                    dividendQ: this.updateBox.dividendQ,
                    currencyDividendQ: this.updateBox.currencyDividendQ,
                    currencyDividendY: this.updateBox.currencyDividendQ,
                    dcfWithMarginOfSafety: this.updateBox.dcfWithMarginOfSafety,
                };

                const response = await db.put(`/watchlist/update/manual`, watchlistUpdateManualData);
                this.showEditForm = false;
                this.$router.go(0);

                if (response.ok) {
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
                const response = await fetch(`https://webapp-backend-production.up.railway.app/watchlist/delete/${id}`, {
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
                dividendYield: "",
                freeCashFlow0: "",
                freeCashFlow1: "",
                freeCashFlow2: "",
                freeCashFlow3: "",
                freeCashFlow4: "",
                freeCashFlow5: "",
                growthRate: "",
                perpetualGrowthRate: "",
                discountRate: "",
                cash: "",
                totalDebt: "",
                sharesOutstanding: "",
                dcfWithMarginOfSafety: "",
            };
        },


        async addCalculatingWatchlist() {
            try {
                const watchlistAddCalculatingData = {
                    ticker: this.newBox.ticker,
                    company: this.newBox.company,
                    price: this.newBox.price,
                    currencyPrice: this.newBox.currencyPrice,
                    currencyDcf: this.newBox.currencyDcf,
                    dividendQ: this.newBox.dividendQ,
                    currencyDividendQ: this.newBox.currencyDividendQ,
                    currencyDividendY: this.newBox.currencyDividendQ,
                    freeCashFlow0: this.newBox.freeCashFlow0,
                    freeCashFlow1: this.newBox.freeCashFlow1,
                    freeCashFlow2: this.newBox.freeCashFlow2,
                    freeCashFlow3: this.newBox.freeCashFlow3,
                    freeCashFlow4: this.newBox.freeCashFlow4,
                    freeCashFlow5: this.newBox.freeCashFlow5,
                    growthRate: this.newBox.growthRate,
                    perpetualGrowthRate: this.newBox.perpetualGrowthRate,
                    discountRate: this.newBox.discountRate,
                    cash: this.newBox.cash,
                    totalDebt: this.newBox.totalDebt,
                    sharesOutstanding: this.newBox.sharesOutstanding,
                };

                const response = await db.post("/watchlist/add/calc", watchlistAddCalculatingData);

                this.showAddForm = false;
                this.$router.go(0);

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


        async addManualWatchlist() {
            try {
                const watchlistAddManualData = {
                    ticker: this.newBox.ticker,
                    company: this.newBox.company,
                    price: this.newBox.price,
                    dcfWithMarginOfSafety: this.newBox.dcfWithMarginOfSafety,
                    currencyPrice: this.newBox.currencyPrice,
                    currencyDcf: this.newBox.currencyDcf,
                    dividendQ: this.newBox.dividendQ,
                    currencyDividendQ: this.newBox.currencyDividendQ,
                    currencyDividendY: this.newBox.currencyDividendQ,
                };

                const response = await db.post("/watchlist/add/manual", watchlistAddManualData);

                this.showAddForm = false;
                this.$router.go(0);

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
            this.boxes.sort((a, b) => b.dcfWithMarginOfSafety - a.dcfWithMarginOfSafety);
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

            fetch('https://webapp-backend-production.up.railway.app/watchlist/sorted/disparity', { headers })
                .then(res => res.json())
                .then(data => {
                    this.boxes = data;
                    console.log(data);
                })
                .catch(error => console.error('Error:', error));
        },

        convertDecimalSeparator(input) {
            return input.replace(",", ".");
        },

        handleInputChange(event) {
            const value = event.target.value;
            const convertedValue = this.convertDecimalSeparator(value);
            event.target.value = convertedValue;
        },

        inputToUpperCase(input) {
            //const upperCaseInput = input.toUpperCase();

            return input.toUpperCase();
        },


        handleInputChangeToUpperCase(event) {
            const value = event.target.value;
            const convertedValue = this.inputToUpperCase(value);
            event.target.value = convertedValue;
        }

    }

}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Six+Caps&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');



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
    color: rgba(33, 151, 197, 0.815);
    font-weight: 300;
    max-width: 500px;
    text-transform: uppercase;
    letter-spacing: 6px;
    position: relative;
    animation: text 3s 1;
    font-family: Oswald;
}

@keyframes text {

    0% {

        color: rgba(33, 151, 197, 0.815);

    }

    30% {

        letter-spacing: 15px;

    }

    85% {

        letter-spacing: 6px;

    }
}




/** CONTENT - MAINBOX */
.mainbox {
    width: 95rem;
    height: 45rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #222222;
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
    background: #222327;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 7px;
    background: #303134;
    margin-bottom: 3px;
}

.ticker_box {
    height: 2rem;
    width: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    letter-spacing: 0.05rem;
    font-weight: 200;
    color: #807f7f;
    font-family: 'Poppins', sans-serif;
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
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    letter-spacing: 0.5px;

}

.disparity_box {
    height: 2rem;
    width: 23rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
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
    font-size: 1rem;
    color: rgba(8, 172, 236, 0.918);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

tr:nth-child(even) {
    background: #27272A;
}



.currency {
    font-size: 0.7rem;
    color: #807f7f;
    font-weight: 200;
    padding-top: 5px;
    font-family: 'Poppins', sans-serif;
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




/* ADD FORM*/

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
}

.add_form {
    height: 30rem;
    width: 50rem;
    border-radius: 15px;
    background: #222327;
    z-index: 1000;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.add_form_description {
    height: 3rem;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 300;
    font-family: IBM Plex Sans, sans-serif;
    letter-spacing: 3px;
    color: #D4D4D8;
    padding-bottom: 10px;
}

.box {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.box_inside1 {
    margin-top: 20px;
    margin-right: 30px;
}

.box_inside2_inside {
    display: flex;
    gap: 20px;
}

.dcf_manual_add_box {
    margin-top: 20px;
}

.dcf_manual_add_box_description,
.box_inside2_description{
    color: rgba(159, 194, 204, 0.76);
    font-family: 'Poppins', 'Six Caps', 'Noto Serif', sans-serif;
    font-size: 0.8rem;
}

.dcf_manual_add_box_description {
    margin-left: 10px;
}


.company_add_box,
.ticker_add_box,
.price_add_box,
.dcf_add_box,
.dividend_q_add_box,
.dcf_manual_add_box_value {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    gap: 10px;
}

.add_form_input_double_1 {
    width: 12rem;
    height: 8px;
    border: 1px solid hsl(240 5% 27.6%);
    border-radius: 3px;
    padding-block: 0.8rem;
    background: #27272A;
    position: relative;
    padding-left: 10px;
    color: #cc9a3a;
}

.add_form_input_double_2 {
    width: 3rem;
    height: 1.72rem;
    background: #27272A;
    border: 1px solid hsl(240 5% 27.6%);
    border-radius: 3px;
    padding-left: 10px;
    color: #cc9a3a;
}

.add_form_input_free_cash_flow {
    width: 9rem;
    height: 8px;
    border: 1px solid hsl(240 5% 27.6%);
    border-radius: 3px;
    padding-block: 0.8rem;
    background: #27272A;
    position: relative;
    color: #cc9a3a;
    padding-left: 10px;
}

.add_form_input_double_1:focus,
.add_form_input_double_2:focus,
.add_form_input_free_cash_flow:focus {
    outline: none;
    border: 1px solid rgba(159, 194, 204, 0.76);
}

.input_format {
    position: relative;
    display: flex;
    align-items: center;
    font-family: sans-serif;
    margin-top: 20px;
}

.input_format label {
    color: #d8c6c65e;
    letter-spacing: 0.05rem;
    top: -11px;
    font-size: 0.6rem;
    font-weight: 300;
}

.add_box_label {
    position: absolute;
    transition: top 0.3s, font-size 0.3s;
}


.add_form_input_double_1:focus+.add_box_label,
.add_form_input_free_cash_flow:focus+.add_box_label {
    top: -11px;
    font-size: 0.6rem;
    font-weight: 400;
    color: rgba(159, 194, 204, 0.76);
    font-family: sans-serif;
}

.add_form_input_double_1:not(:placeholder-shown).add_form_input_double_1:not(:focus)+.add_box_label,
.add_form_input_free_cash_flow:not(:placeholder-shown).add_form_input_free_cash_flow:not(:focus)+.add_box_label {
    top: -11px;
    font-size: 0.6rem;
    font-weight: 400;

}

.add_form_buttons {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    gap: 20px;
    font-family: IBM Plex Sans, sans-serif;

}

.add_form_button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 2.5rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    background: rgba(5, 189, 235, 0.082);
    font-size: 0.9rem;
    color: rgba(130, 163, 173, 0.76);
    font-weight: 500;
}


.add_form_button:hover {
    background: rgba(210, 168, 91, 0.12);
    color: rgba(211, 201, 198, 0.75);
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