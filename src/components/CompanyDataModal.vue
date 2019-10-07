<template>
    <div class="company-data-modal" v-bind:style="{ display: modalState? 'block' : 'none' }">
        <div class="modal-content">
                <form>
                    <div class="form-group">
                        <div class="label">Additional Notes</div>
                        <textarea
                                id="notes"
                                :value="notes"
                                @change="setNotesLocal($event.target.value)"
                                name="notes"
                                placeholder="e.g. Good Tech Company"
                        ></textarea>
                    </div>
                </form>
                <div @click="save" class="button">Save</div>
        </div>
    </div>
</template>

<script>

	export default {
		name: 'CompanyDataModal',
        props: ['notes', 'modalState', 'setNotes'],
        methods: {
			setNotesLocal(value) {
				this.localNotes = value;
            },
			data: function () {
				return {
					localNotes: '',
				};
			},
			save() {
				this.setNotes(this.localNotes);
            }
        }
	};
</script>
