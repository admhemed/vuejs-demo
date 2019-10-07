<template>
    <div class="company-data-modal" @click="dismiss" v-bind:style="{ display: modalState? 'block' : 'none' }">
        <div class="modal-content" @click="$event.stopPropagation()">
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
        props: ['notes', 'modalState', 'setNotes', 'dismiss'],
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
            },
			dismiss() {
				this.dismiss();
            }
        }
	};
</script>
