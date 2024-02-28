<template>
    <main class="main">

        <section class="section">

            <TBackgroundGray />
            <TNavbar />

            <div class="content">

                <div class="mainbox">

                    <div class="header">
                        <span class="text1">PORTFOLIO</span>
                    </div>


                    <div class="overlay" v-if="showAddForm">
                        <form v-if="showAddForm" class="add_form">

                            <div class="add_form_description">Add stock to portfolio</div>

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
                                </div>




                                <div class="box_inside2">

                                    <div class="shares_add_box">
                                        <div class="input_format">
                                            <input v-model="newBox.sharesBuy" type="text" id="sharesBuy" required
                                                   class="add_form_input_double_1" placeholder="" />
                                            <label for="sharesBuy" class="add_box_label">SHARES BUY</label>
                                        </div>
                                    </div>


                                    <div class="buy_add_box">
                                        <div class="input_format">
                                            <input v-model="newBox.buy" type="text" id="buy" required class="add_form_input_double_1"
                                                   placeholder="" />
                                            <label for="buy" class="add_box_label">BUY</label>
                                        </div>
                                    </div>

                                    <div class="sell_add_box">
                                        <div class="input_format">
                                            <input v-model="newBox.sell" type="text" id="sell" required class="add_form_input_double_1"
                                                   placeholder="" />
                                            <label for="sell" class="add_box_label">SELL</label>
                                        </div>
                                    </div>

                                    <div class="shares_add_box">
                                        <div class="input_format">
                                            <input v-model="newBox.sharesSell" type="text" id="sharesSell" required
                                                   class="add_form_input_double_1" placeholder="" />
                                            <label for="sharesSell" class="add_box_label">SHARES SELL</label>
                                        </div>
                                    </div>

                                    <div class="interestBuySell_add_box">
                                        <div class="input_format">
                                            <input v-model="newBox.interestBuySell" type="text" id="interestBuySell" required
                                                   class="add_form_input_double_1" placeholder="" />
                                            <label for="interestBuySell" class="add_box_label">BUY/SELL - INTEREST</label>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="add_form_buttons">
                                <div type="submit" @click="addStockToPortfolio" class="add_form_button">ADD</div>
                                <div type="button" @click="cancelAdd" class="add_form_button">CANCEL</div>
                            </div>

                        </form>
                    </div>






                    <div class="overlay" v-if="showEditForm">
                        <form v-if="showEditForm" class="add_form">

                            <div class="add_form_description">Update stock</div>

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
                                            <input v-model="updateBox.ticker" type="text" id="ticker" required
                                                   class="add_form_input_double_1" placeholder="" />
                                            <label for="ticker" class="add_box_label">TICKER</label>
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
                                </div>




                                <div class="box_inside2">

                                    <div class="shares_add_box">
                                        <div class="input_format">
                                            <input v-model="updateBox.sharesBuy" type="text" id="sharesBuy" required
                                                   class="add_form_input_double_1" placeholder="" />
                                            <label for="sharesBuy" class="add_box_label">SHARES BUY</label>
                                        </div>
                                    </div>


                                    <div class="buy_add_box">
                                        <div class="input_format">
                                            <input v-model="updateBox.buy" type="text" id="buy" required class="add_form_input_double_1"
                                                   placeholder="" />
                                            <label for="buy" class="add_box_label">BUY</label>
                                        </div>
                                    </div>

                                    <div class="sell_add_box">
                                        <div class="input_format">
                                            <input v-model="updateBox.sell" type="text" id="sell" required class="add_form_input_double_1"
                                                   placeholder="" />
                                            <label for="sell" class="add_box_label">SELL</label>
                                        </div>
                                    </div>

                                    <div class="shares_add_box">
                                        <div class="input_format">
                                            <input v-model="updateBox.sharesSell" type="text" id="sharesSell" required
                                                   class="add_form_input_double_1" placeholder="" />
                                            <label for="sharesSell" class="add_box_label">SHARES SELL</label>
                                        </div>
                                    </div>

                                    <div class="interestBuySell_add_box">
                                        <div class="input_format">
                                            <input v-model="updateBox.interestBuySell" type="text" id="interestBuySell" required
                                                   class="add_form_input_double_1" placeholder="" />
                                            <label for="interestBuySell" class="add_box_label">BUY/SELL - INTEREST</label>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="add_form_buttons">
                                <div type="submit" @click="updatePortfolio" class="add_form_button">UPDATE</div>
                                <div type="button" @click="cancelAdd" class="add_form_button">CANCEL</div>
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


                    <table v-if="!loading" class="desktop_portfolio_table">
                        <thead>
                            <tr class="portfolio_table">

                                <th scope="col" class="Ticker">
                                    <div>Ticker</div>
                                </th>
                                <th scope="col" class="Company" @click="sortTableByCompany">
                                    <Icon icon="mdi:alphabet-a" class="portfolio_table_icon" />
                                    <div>Company</div>
                                </th>
                                <th scope="col" class="Shares" @click="sortTableBySharesBuy">

                                    <div>Shares Buy</div>
                                </th>
                                <th scope="col" class="Buy" @click="sortTableByBuy">

                                    <div>Buy</div>
                                </th>
                                <th scope="col" class="Sell" @click="sortTableBySell">

                                    <div>Sell</div>
                                </th>
                                <th scope="col" class="Shares" @click="sortTableBySharesSell">

                                    <div>Shares Sell</div>
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
                            <tr v-for="box in paginatedData" :key="box.id" class="desktop_added_form">
                                <th scope="row" class="hidden-id">{{ box.id }}</th>
                                <td class="desktop_ticker_box">{{ box.ticker }}</td>
                                <td class="desktop_company_box" :class="{ 'same_shares': box.sharesBuy === box.sharesSell }">{{ box.company }}</td>
                                <td class="desktop_shares_box">{{ box.sharesBuy }}</td>
                                <td class="desktop_buy_box">{{ box.buy }}</td>
                                <td class="desktop_sell_box">{{ box.sell }}</td>
                                <td class="desktop_shares_box">{{ box.sharesSell }}</td>
                                <td class="desktop_interestBuySell_box">{{ box.interestBuySell }}</td>
                                <td :class="{
                                    'desktop_profitLossBuySell_box_profit': box.profitLossBuySell > 0,
                                    'desktop_profitLossBuySell_box_loss': box.profitLossBuySell < 0,
                                    'desktop_profitLossBuySell_box_normal': box.profitLossBuySell === 0
                                }">
                                    {{ box.profitLossBuySell }}
                                </td>
                                <td class="desktop_dividend_box">{{ box.dividend }}</td>
                                <td class="desktop_interestDividend_box">{{ box.interestDividend }}</td>
                                <td :class="{
                                    'desktop_profitLossDividend_box_profit': box.profitLossDividend > 0,
                                    'desktop_profitLossDividend_box_loss': box.profitLossDividend < 0,
                                    'desktop_profitLossDividend_box_normal': box.profitLossDividend === 0
                                }">
                                    {{ box.profitLossDividend }}
                                </td>
                                <td :class="{
                                    'desktop_sumProfitLoss_box_profit': box.sumProfitLoss > 0,
                                    'desktop_sumProfitLoss_box_loss': box.sumProfitLoss < 0,
                                    'desktop_sumProfitLoss_box_normal': box.sumProfitLoss === 0
                                }">
                                    {{ box.sumProfitLoss }}
                                </td>


                                <td class="desktop_edit_remove">
                                    <button class="desktop_edit_remove_button" @click="loadPortfolioForEdit(box.id)">
                                        <Icon icon="mdi:edit-outline" class="desktop_edit_remove_icon" />
                                    </button>
                                    <button class="desktop_edit_remove_button" @click="deletePortfolioConfirmation(box.id)">
                                        <Icon icon="mingcute:delete-fill" class="desktop_edit_remove_icon" />
                                    </button>
                                </td>
                            </tr>
                            <tr v-for="sumBox in sumBoxes" :key="sumBox.id" class="desktop_added_form">
                                <th scope="row" class="hidden-id">{{ sumBox.id }}</th>
                                <td class="desktop_value_sum_box">
                                    <Icon icon="tabler:sum" />Total
                                </td>
                                <td class="desktop_sharesBuy_sum_box"></td>
                                <td class="desktop_buy_sum_box">{{ sumBox.buy }}</td>
                                <td class="desktop_sell_sum_box">{{ sumBox.sell }}</td>
                                <td class="desktop_sharesSell_sum_box"></td>
                                <td class="desktop_interestBuySell_sum_box">{{ sumBox.interestBuySell }}</td>
                                <td class="desktop_profitLossBuySell_sum_box">{{ sumBox.profitLossBuySell }}</td>
                                <td class="desktop_dividend_sum_box">{{ sumBox.dividend }}</td>
                                <td class="desktop_interestDividend_sum_box">{{ sumBox.interestDividend }}</td>
                                <td class="desktop_profitLossDividend_sum_box">{{ sumBox.profitLossDividend }}</td>
                                <td :class="{
                                    'desktop_sumProfitLoss_sum_box_profit': sumBox.sumProfitLoss > 0,
                                    'desktop_sumProfitLoss_sum_box_loss': sumBox.sumProfitLoss < 0,
                                    'desktop_sumProfitLoss_sum_box_normal': sumBox.sumProfitLoss === 0
                                }">
                                    {{ sumBox.sumProfitLoss }}
                                </td>

                                <td class="desktop_edit_sum_remove">

                                </td>
                            </tr>
                        </tbody>
                    </table>



                    <div class="sorting">
                        <ul>
                            <li>
                                <div class="active">Sorted by
                                    <Icon icon="raphael:arrowdown" />
                                </div>
                                <div class="sub_menu_1">
                                    <ul>
                                        <li>
                                            <a href="#" @click="">
                                                Company
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="">
                                                Shares Buy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="">
                                                Buy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="">
                                                Sell
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="">
                                                Shares Sell
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="">
                                                Interest - Buy/Sell
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="">
                                                Profit/Loss - Buy/Sell
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="">
                                                Dividend
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="">
                                                Interest - Dividend
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="">
                                                Profit/Loss - Dividend
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" @click="">
                                                Profit/Loss - SUM
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </div>






                    <table v-if="!loading" class="mobile_portfolio_table">
                        <tbody>
                        <tr v-for="box in paginatedData" :key="box.id" class="mobile_added_form">
                            <th scope="row" class="hidden-id">{{ box.id }}</th>

                            <td class="ctud_box">
                                <div class="ct">
                                    <div class="mobile_company_box">{{ box.company }}</div>
                                    <div class="mobile_ticker_box">{{ box.ticker }}</div>
                                </div>
                                <div class="mobile_edit_remove">
                                    <button class="mobile_edit_remove_button" @click="loadWatchlistForEdit(box.id)">
                                        <Icon icon="mdi:edit-outline" class="mobile_edit_remove_icon"/>
                                    </button>
                                    <button class="mobile_edit_remove_button" @click="deleteWatchlistConfirmation(box.id)">
                                        <Icon icon="mingcute:delete-fill" class="mobile_edit_remove_icon"/>
                                    </button>
                                </div>
                            </td>

                            <td class="mobile_shares_box">
                                <div class="name">
                                    <div>Shares Buy</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ box.sharesBuy }}</div>
                                </div>
                            </td>

                            <td class="mobile_buy_box">
                                <div class="name">
                                    <div>Buy</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ box.buy }}</div>
                                </div>
                            </td>

                            <td class="mobile_sell_box">
                                <div class="name">
                                    <div>Sell</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ box.sell }}</div>
                                </div>
                            </td>

                            <td class="mobile_shares_box">
                                <div class="name">
                                    <div>Shares Sell</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ box.sharesSell }}</div>
                                </div>
                            </td>

                            <td class="mobile_interestBuySell_box">
                                <div class="name">
                                    <div>Interest - Buy/Sell</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ box.interestBuySell }}</div>
                                </div>
                            </td>

                            <td :class="{
                                    'mobile_profitLossBuySell_box_profit': box.profitLossBuySell > 0,
                                    'mobile_profitLossBuySell_box_loss': box.profitLossBuySell < 0,
                                    'mobile_profitLossBuySell_box_normal': box.profitLossBuySell === 0
                                }">
                                <div class="name">
                                    <Icon icon="ph:plus-minus-bold" />
                                    <div>Buy/Sell</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ box.profitLossBuySell }}</div>
                                </div>
                            </td>

                            <td class="mobile_dividend_box">
                                <div class="name">
                                    <Icon icon="material-symbols:percent" />
                                    <div>Dividend</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ box.dividend }}</div>
                                </div>
                            </td>

                            <td class="mobile_interestDividend_box">
                                <div class="name">
                                    <div>Interest - Dividend</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ box.interestDividend }}</div>
                                </div>
                            </td>

                            <td :class="{
                                    'mobile_profitLossDividend_box_profit': box.profitLossDividend > 0,
                                    'mobile_profitLossDividend_box_loss': box.profitLossDividend < 0,
                                    'mobile_profitLossDividend_box_normal': box.profitLossDividend === 0
                                }">
                                <div class="name">
                                    <Icon icon="ph:plus-minus-bold" />
                                    <div>Dividend</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ box.profitLossDividend }}</div>
                                </div>
                            </td>

                            <td :class="{
                                    'mobile_sumProfitLoss_box_profit': box.sumProfitLoss > 0,
                                    'mobile_sumProfitLoss_box_loss': box.sumProfitLoss < 0,
                                    'mobile_sumProfitLoss_box_normal': box.sumProfitLoss === 0
                                }">
                                <div class="name">
                                    <Icon icon="ph:plus-minus-bold" />
                                    <div>SUM</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ box.sumProfitLoss }}</div>
                                </div>
                            </td>

                        </tr>
                        <tr v-for="sumBox in sumBoxes" :key="sumBox.id" class="mobile_added_form_sum">
                            <th scope="row" class="hidden-id">{{ sumBox.id }}</th>
                            <td class="mobile_value_sum_box">Total</td>

                            <td class="mobile_buy_sum_box">
                                <div class="name">
                                    <Icon icon="icons8:buy" />
                                    <div>Buy</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ sumBox.buy }}</div>
                                </div>
                            </td>

                            <td class="mobile_sell_sum_box">
                                <div class="name">
                                    <div>Sell</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ sumBox.sell }}</div>
                                </div>
                            </td>

                            <td class="mobile_interestBuySell_sum_box">
                                <div class="name">
                                    <div>Interest - Buy/Sell</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ sumBox.interestBuySell }}</div>
                                </div>
                            </td>

                            <td class="mobile_profitLossBuySell_sum_box">
                                <div class="name">
                                    <Icon icon="ph:plus-minus-bold" />
                                    <div>Buy/Sell</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ sumBox.profitLossBuySell }}</div>
                                </div>
                            </td>

                            <td class="mobile_dividend_sum_box">
                                <div class="name">
                                    <Icon icon="material-symbols:percent" />
                                    <div>Dividend</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ sumBox.dividend }}</div>
                                </div>
                            </td>

                            <td class="mobile_interestDividend_sum_box">
                                <div class="name">
                                    <div>Interest - Dividend</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ sumBox.interestDividend }}</div>
                                </div>
                            </td>

                            <td class="mobile_profitLossDividend_sum_box">
                                <div class="name">
                                    <Icon icon="ph:plus-minus-bold" />
                                    <div>Dividend</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ sumBox.profitLossDividend }}</div>
                                </div>
                            </td>

                            <td :class="{
                                    'mobile_sumProfitLoss_sum_box_profit': sumBox.sumProfitLoss > 0,
                                    'mobile_sumProfitLoss_sum_box_loss': sumBox.sumProfitLoss < 0,
                                    'mobile_sumProfitLoss_sum_box_normal': sumBox.sumProfitLoss === 0
                                }">
                                <div class="name">
                                    <Icon icon="ph:plus-minus-bold" />
                                    <div>SUM</div>
                                </div>
                                <div class="value">
                                    <div class="">{{ sumBox.sumProfitLoss }}</div>
                                </div>
                            </td>

                            <td class="mobile_edit_sum_remove">

                            </td>
                        </tr>
                        </tbody>
                    </table>


                    <div class="pages_panel" v-if="totalPages > 1">
                        <div class="firstPage" @click="firstPage" >
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
import TBackgroundGray from '@/components/TBackgroundGray.vue'
import { Icon } from '@iconify/vue';
import db from '../utils/db.js'
import axios from 'axios';

export default {

    components: {
        TNavbar,
        Icon,
        TBackgroundGray,
    },
    data() {
        return {
            sumBoxes: [],
            boxes: [],
            showAddForm: false,
            newBox: {
                ticker: "",
                company: "",
                sharesBuy: "",
                buy: "",
                sell: "",
                sharesSell: "",
                interestBuySell: "",
                dividend: "",
                interestDividend: "",
            },

            box: {
                ticker: "",
                company: "",
                sharesBuy: "",
                buy: "",
                sell: "",
                sharesSell: "",
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
                sharesBuy: "",
                buy: "",
                sell: "",
                sharesSell: "",
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

            fetch('https://webapp-backend-production.up.railway.app/portfolio/load', { headers })
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

            fetch('https://webapp-backend-production.up.railway.app/portfolio/load/sum', { headers })
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
                    sharesBuy: this.updateBox.sharesBuy,
                    buy: this.updateBox.buy,
                    sell: this.updateBox.sell,
                    sharesSell: this.updateBox.sharesSell,
                    interestBuySell: this.updateBox.interestBuySell,
                    dividend: this.updateBox.dividend,
                    interestDividend: this.updateBox.interestDividend
                };

                const response = await db.put(`/portfolio/update`, portfolioUpdateData);

                this.showEditForm = false;
                this.$router.go(0);

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
                const response = await fetch(`https://webapp-backend-production.up.railway.app/portfolio/delete/${id}`, {
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
                    sharesBuy: this.newBox.sharesBuy,
                    buy: this.newBox.buy,
                    sell: this.newBox.sell,
                    sharesSell: this.newBox.sharesSell,
                    interestBuySell: this.newBox.interestBuySell,
                    dividend: this.newBox.dividend,
                    interestDividend: this.newBox.interestDividend
                };

                const response = await db.post("/portfolio/add", portfolioAddData);

                this.showAddFormForm = false;
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

        sortTableBySharesBuy() {
            this.boxes.sort((a, b) => b.sharesBuy - a.sharesBuy);
        },

        sortTableBySharesSell() {
            this.boxes.sort((a, b) => b.sharesSell - a.sharesSell);
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

        firstPage() {
            this.currentPage = 1; 
        },

        lastPage() {
            this.currentPage = this.totalPages; 
        },

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

.main {
    position: absolute;
    overflow-x: hidden;
    min-height: 100vh;
    width: 100%;
    background: #141414;
    top: 0;
    left: 0;
}


.section {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
.content {
    width: 95%;
    min-height: 45rem;
    margin-top: 80px;
    margin-bottom: 80px;
    background: rgba(44, 43, 43, 0.96);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

}


.mainbox {
    width: 90%;
    min-height: 45rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
}

.header {
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}


.portfolio_table {
    height: 3rem;
    width: 93.25rem;
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
    background: #222327;
    border: 1px solid #8880805e;

}

.Company {
    height: 2.5rem;
    width: 20rem;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: 400;
    background: #222327;
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
    background: #222327;
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

/** SORTING */

.sorting {
    color: #8b8b94;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    width: 100%;
    list-style: none;
    display: inline-flex;
    border-bottom: 1px solid #8b8b94;
    margin-bottom: 10px;
}


.sorting ul li,
.sorting ul li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}


.sorting ul li a,
.sorting ul li a {
    text-decoration: none;
    color: #cfcfcf;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-left: 10px;
}

.active:hover {
    color: #cfcfcf;
    cursor: pointer;

}

.sorting ul li:hover,
.sorting ul li:hover {
    color: #9e8a53;
    cursor: pointer;

}

.sub_menu_1 {
    display: none;
}

.sorting ul li:hover .sub_menu_1,
.sorting ul li:hover .sub_menu_1 {
    display: block;
    position: absolute;
    background: #2A2727FF;
    margin-top: 245px;
    font-size: 0.8rem;
    cursor: pointer;
    border-radius: 7px;
}

.sorting ul li:hover .sub_menu_1 ul,
.sorting ul li:hover .sub_menu_1 ul {
    display: block;

}

.sorting ul li:hover .sub_menu_1 ul li,
.sorting ul li:hover .sub_menu_1 ul li {
    height: 2rem;
    width: 10rem;
}


.sorting ul li:hover .sub_menu_1 ul li a:hover,
.sorting ul li:hover .sub_menu_1 ul li a:hover {
    color: #9e8a53;
    cursor: pointer;
}










/** ADDED FORM - DESKTOP*/

.desktop_added_form {
    height: 2rem;
    width: 93.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1px;
    margin-bottom: 3px;

}


.desktop_ticker_box {
    height: 2rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    letter-spacing: 0.05rem;
    font-weight: 400;
    border: 1px solid #8880805e;
    background: #27272A;
    color: #807f7f;
    font-family: sans-serif;
    border-radius: 5px 0 0 5px;
}


.desktop_company_box {
    height: 2rem;
    width: 20rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    border: 1px solid #8880805e;
    background: #27272A;
    font-size: 0.8rem;
    color: rgba(8, 172, 236, 0.918);
    font-family: sans-serif;
    letter-spacing: 0.5px;
}

.desktop_edit_remove {
    height: 2rem;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 3px;
}

.desktop_edit_remove_button {
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

.desktop_edit_remove_button:hover {
    background: #c7c5c1d3;
}

.desktop_edit_remove_icon {
    color: rgb(136, 136, 136);
    font-size: 1.2rem;
}

.desktop_edit_remove_button:hover .desktop_edit_remove_icon {
    color: #2a2727;
}



.desktop_shares_box,
.desktop_buy_box,
.desktop_sell_box,
.desktop_interestBuySell_box,
.desktop_dividend_box,
.desktop_interestDividend_box {
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
    background: #27272A;


}

.desktop_profitLossBuySell_box_normal,
.desktop_profitLossDividend_box_normal {
    height: 2rem;
    width: 6rem;
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
    background: #27272A;
}

.desktop_profitLossBuySell_box_profit,
.desktop_profitLossDividend_box_profit {
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
    background: #27272A;
}

.desktop_profitLossBuySell_box_loss,
.desktop_profitLossDividend_box_loss {
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
    background: #27272A;
}


.desktop_dividend_box {
    margin-left: 0.75rem;
    border-radius: 5px 0 0 5px;
}

.desktop_sumProfitLoss_box_profit {
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

.desktop_sumProfitLoss_box_loss {
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

.desktop_sumProfitLoss_box_normal {
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






/** ADDED FORM - MOBILE*/

.mobile_portfolio_table {
    width: 100%;
    min-height: 20rem;
}

.mobile_added_form {
    min-height: 3rem;
    width: 100%;
    border-radius: 7px;
    background: #303134;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.71);
    border: 1px solid hsl(240 5% 27.6%);
    padding-bottom: 15px;
}


.ctud_box {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}


.ct {
    width: 90%;
    padding: 20px;
}


.mobile_ticker_box {
    font-size: 0.7rem;
    letter-spacing: 0.05rem;
    font-weight: 200;
    color: #807f7f;
    font-family: 'Poppins', sans-serif;
}


.mobile_company_box {
    font-size: 1rem;
    color: rgba(8, 172, 236, 0.918);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    letter-spacing: 0.5px;
}

.mobile_edit_remove {
    padding-right: 20px;
    padding-top: 30px;
    display: flex;
    justify-content: flex-end;
    gap: 5px;
}

.mobile_edit_remove_button {
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

.mobile_edit_remove_button:hover {
    background: #c7c5c1d3;
}

.mobile_edit_remove_icon {
    color: rgb(136, 136, 136);
    font-size: 1.2rem;
}

.mobile_edit_remove_button:hover .edit_remove_icon {
    color: #2a2727;
}



.mobile_shares_box,
.mobile_buy_box,
.mobile_sell_box,
.mobile_interestBuySell_box,
.mobile_dividend_box,
.mobile_interestDividend_box {
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    color: rgba(8, 172, 236, 0.918);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: rgba(69, 154, 224, 0.12);
    border-radius: 5px;
    margin: 5px;
    border: 1px solid hsl(240 5% 27.6%);
}


.name {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
    font-size: 13px;
    color: #dedede;
    margin-left: 5px;
}

.value {
    display: flex;
    flex-direction: row;
    gap: 5px;
}



.mobile_profitLossBuySell_box_normal,
.mobile_profitLossDividend_box_normal {
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    color: #c9c9c9;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: #c9c9c934;
    border-radius: 5px;
    margin: 5px;
    border: 1px solid hsl(240 5% 27.6%);
}

.mobile_profitLossBuySell_box_profit,
.mobile_profitLossDividend_box_profit {
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    color: #6cc06c;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: rgba(198, 239, 206, 0.082);
    border-radius: 5px;
    margin: 5px;
    border: 1px solid hsl(240 5% 27.6%);
}

.mobile_profitLossBuySell_box_loss,
.mobile_profitLossDividend_box_loss {
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    color: #e0454b;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: #e0454a1f;
    border-radius: 5px;
    margin: 5px;
    border: 1px solid hsl(240 5% 27.6%);
}


.mobile_sumProfitLoss_box_profit {
    width: 95%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    color: #6cc06c;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: rgba(198, 239, 206, 0.082);
    border-radius: 5px;
    margin: 5px;
    border: 1px solid hsl(240 5% 27.6%);
}

.mobile_sumProfitLoss_box_loss {
    width: 95%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    color: #e0454b;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: #e0454a1f;
    border-radius: 5px;
    margin: 5px;
    border: 1px solid hsl(240 5% 27.6%);
}

.mobile_sumProfitLoss_box_normal {
    width: 95%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    color: #c9c9c9;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: #c9c9c934;
    border-radius: 5px;
    margin: 5px;
    border: 1px solid hsl(240 5% 27.6%);
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
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
}

.add_form {
    height: 450px;
    width: 550px;

    border-radius: 15px;
    background: #222327;
    z-index: 1000;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.add_form_description {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 300;
    font-family: IBM Plex Sans, sans-serif;
    letter-spacing: 3px;
    color: #D4D4D8;
    padding-bottom: 20px;

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



.company_add_box,
.ticker_add_box {
    display: flex;
    flex-direction: row;
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


.add_form_input_double_1:focus {
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



/** SUM BOX - DESKTOP */

.desktop_value_sum_box {
    height: 2.5rem;
    width: 24.1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    font-size: 1rem;
    border: 1px solid #8880805e;
    background: #222327;
    border-radius: 5px 0 0 10px;
    font-weight: 400;
    margin-top: 20px;
    font-family: Oswald;
    color: #8f8f8f;
}

.desktop_edit_sum_remove {
    height: 2.5rem;
    width: 7rem;
    gap: 1px;
    background: none;
    margin-top: 20px;
}

.desktop_buy_sum_box,
.desktop_sell_sum_box,
.desktop_sharesBuy_sum_box,
.desktop_sharesSell_sum_box,
.desktop_interestBuySell_sum_box,
.desktop_profitLossBuySell_sum_box,
.desktop_dividend_sum_box,
.desktop_interestDividend_sum_box,
.desktop_profitLossDividend_sum_box {
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
    background: #222327;
    margin-top: 20px;
    color: #807f7f;
    font-family: sans-serif;
}

.desktop_profitLossBuySell_sum_box,
.desktop_profitLossDividend_sum_box {
    border-radius: 0 5px 10px 0;
}


.desktop_dividend_sum_box {
    border-radius: 5px 0 0 10px;
    margin-left: 0.75rem;
}


.desktop_sumProfitLoss_sum_box_profit {
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


.desktop_sumProfitLoss_sum_box_loss {
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


.desktop_sumProfitLoss_sum_box_normal {
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



/** SUM BOX - MOBILE*/

.mobile_added_form_sum {
    min-height: 3rem;
    width: 100%;
    border-radius: 7px;
    background: #3b3b3b;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.71);
    border: 1px solid hsl(240 5% 27.6%);
    padding-bottom: 15px;
}

.mobile_value_sum_box {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: Oswald;
    color: #9d8633;
}

.mobile_edit_sum_remove {
    height: 2.5rem;
    width: 7rem;
    gap: 1px;
    background: none;
    margin-top: 20px;
}

.mobile_sum_icon {
    font-size: 1.4rem;
}

.mobile_buy_sum_box,
.mobile_sell_sum_box,
.mobile_interestBuySell_sum_box,
.mobile_profitLossBuySell_sum_box,
.mobile_dividend_sum_box,
.mobile_interestDividend_sum_box,
.mobile_profitLossDividend_sum_box {
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    color: #9d8633;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: rgba(158, 138, 83, 0.14);
    border-radius: 5px;
    margin: 5px;
    border: 1px solid hsl(240 5% 27.6%);
}


.mobile_sumProfitLoss_sum_box_profit {
    width: 95%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    color: #6cc06c;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: rgba(198, 239, 206, 0.082);
    border-radius: 5px;
    margin: 5px;
    border: 1px solid hsl(240 5% 27.6%);
}


.mobile_sumProfitLoss_sum_box_loss {
    width: 95%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    color: #e0454b;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: #e0454a1f;
    border-radius: 5px;
    margin: 5px;
    border: 1px solid hsl(240 5% 27.6%);
}


.mobile_sumProfitLoss_sum_box_normal {
    width: 95%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    gap: 5px;
    font-size: 1rem;
    color: #c9c9c9;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: #c9c9c934;
    border-radius: 5px;
    margin: 5px;
    border: 1px solid hsl(240 5% 27.6%);
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



.same_shares {
    color: rgba(158, 158, 158, 0.658); 
}




.desktop_portfolio_table {
    display: none;
}

.sorting {
    display: none;
}

.mobile_portfolio_table {
    display: none;
}




/* For Desktop View */
@media screen and (min-width: 1500px) {
    .desktop_portfolio_table {
        display: table;
    }


    .content {
        width: 95rem;
    }

    .add_form {
        width: 50rem;
    }

    .add_form_button {
        width: 10rem;
    }

}

/* For Desktop View */
@media screen and (min-width: 1200px)
and (max-width: 1500px) {
    .mobile_portfolio_table {
        display: table;
    }
    .sorting {
        display: inline;
    }

    .add_form {
        width: 50rem;
    }

    .add_form_button {
        width: 10rem;
    }


}


/* For Desktop View */
@media screen and (min-width: 1024px)
and (max-width: 1200px) {
    .mobile_portfolio_table {
        display: table;
    }
    .sorting {
        display: inline;
    }

    .add_form {
        width: 50rem;
    }

    .add_form_button {
        width: 10rem;
    }
}

/* For Tablet View */
@media screen and (min-width: 768px)
and (max-width: 1024px) {
    .mobile_portfolio_table {
        display: table;
    }

    .sorting {
        display: inline;
    }

    .add_form {
        width: 47rem;
    }

    .add_form_button {
        width: 10rem;
    }

}

/* For Mobile View */
@media screen and (min-width: 480px)
and (max-width: 768px) {
    .mobile_portfolio_table {
        display: table;
    }

    .sorting {
        display: inline;
    }

    .add_form_button {
        width: 10rem;
    }



}

@media screen and (min-width: 320px)
and (max-width: 480px) {
    .mobile_portfolio_table {
        display: table;
    }

    .sorting {
        display: inline;
    }



}

@media screen and (max-width: 320px) {
    .mobile_portfolio_table {
        display: table;
    }

    .sorting {
        display: inline;
    }

}


</style>

