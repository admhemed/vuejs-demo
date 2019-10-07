<template>
    <div class="company-data">
        Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut eim ad minim veniam.'
        <form
        >

            <div v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>



            <div class="form-group" :class="{ 'form-group--error': $v.companyName.$error }">
                <label for="company-name">Company Name</label><br>
                <input
                        id="company-name"
                        :value="companyName"
                        @change="setCompanyName($event.target.value)"
                        type="text"
                        name="company-name"
                        placeholder="e.g. Your Company Name"
                >
            </div>
            <div class="error" v-if="!$v.companyName.required && $v.companyName.$dirty">Field is required</div>

            <div class="form-group" :class="{ 'form-group--error': $v.companySpend.$error }">
                <label for="company-spend">Company Spend</label><br>
                <input
                        id="company-spend"
                        :value="companySpend"
                        @change="setCompanySpend($event.target.value)"
                        @blur="addCurrencySign"
                        type="text"
                        name="company-spend"
                        placeholder="e.g. $150,000"
                >
            </div>
            <div class="error" v-if="!$v.companySpend.mustBeCurrency && $v.companySpend.$dirty">Field must be number</div>
            <div class="error" v-if="!$v.companySpend.mustBePositiveCurrency && $v.companySpend.$dirty">Amount must be positive</div>


            <div class="form-group" :class="{ 'form-group--error': $v.companySpendAbility.$error }">
                <label for="company-spend-ability">Company Spend Ability</label><br>
                <input
                        id="company-spend-ability"
                        :value="companySpendAbility"
                        @change="setCompanySpendAbility($event.target.value)"
                        type="text"
                        name="company-spend-ability"
                        placeholder="e.g. $150,000 - $300,000"
                >
            </div>
            <div class="error" v-if="!$v.companySpendAbility.mustBeRangeOfCurrencyNumbers && $v.companySpendAbility.$dirty">Field must be a range of 2 amounts. E.g. $150,000 - $300,000</div>
            <div class="error" v-if="!$v.companySpendAbility.secondAmountMustBeLargerThanFirst && $v.companySpendAbility.$dirty">Second amount must be bigger than the first one</div>


            <div class="form-group">
                <label for="notes">Notes</label><br>
                <textarea
                        id="notes"
                        :value="notes"
                        @focus="notesFocus"
                        @change="setNotes($event.target.value)"
                        name="notes"
                        placeholder="e.g. Good Tech Company"
                ></textarea>
            </div>

            <CompanyDataModal :notes="notes" :modal-state="modalState" :set-notes="setNotes" :dismiss="dismissModal" />
        </form>
    </div>
</template>

<script>
	import { validationMixin } from 'vuelidate'
	import { required } from 'vuelidate/lib/validators'
	import {
		mustBeCurrency,
		mustBePositiveCurrency,
		mustBeRangeOfCurrencyNumbers, secondAmountMustBeLargerThanFirst
	} from "../factored-out-functions/custom-validators";
	import CompanyDataModal from "Components/CompanyDataModal.vue";

	export default {
		name: 'CompanyData',
		mixins: [validationMixin],
        methods: {
			setCompanyName(value) {
				this.companyName = value;
				this.$v.companyName.$touch()
			},
			setCompanySpend(value) {
				this.companySpend = value;
				this.$v.companySpend.$touch()
			},
			setCompanySpendAbility(value) {
				this.companySpendAbility = value;
				this.$v.companySpendAbility.$touch()
			},
			setNotes(value) {
				this.notes = value;
				this.modalState = false;
			},
            notesFocus() {
				console.log('notesClick');

				this.modalState = true;
			},
            dismissModal() {
			    this.modalState = false;
            },
            addCurrencySign() {
				if (this.companySpend && this.companySpend.slice(0, 1) !== '$') {
					this.companySpend = '$' + this.companySpend;
                }
            }
        },
		validations: {
			companyName: {
				required
			},
            companySpend: {
				mustBeCurrency,
                mustBePositiveCurrency
            },
            companySpendAbility: {
				mustBeRangeOfCurrencyNumbers,
                secondAmountMustBeLargerThanFirst
            }
		},
		data: function () {
			return {
				errors: [],
				companyName: null,
				companySpend: null,
				companySpendAbility: null,
                notes: '',
                modalState: false
			};
		},
        components: {
			CompanyDataModal
        }
	};
</script>
