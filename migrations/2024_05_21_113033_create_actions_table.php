<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('actions', function (Blueprint $table) {
            $table->id();
            $table->integer('exercice')->nullable();
            $table->bigInteger('entreprises_id')->unsigned();
            $table->bigInteger('themes_id')->unsigned();
            $table->bigInteger('Intervenants_id')->unsigned();
            $table->bigInteger('etablissements_id')->unsigned();
            $table->dateTime('date_debut_prev')->nullable();
            $table->dateTime('date_fin_prev')->nullable();
            $table->float('prix_reel')->nullable();
            $table->dateTime('date_fin_real')->nullable();
            $table->dateTime('date_debut_real')->nullable();
            $table->integer('nbparticipants')->nullable();
            $table->integer('status')->nullable();
            $table->timestamps();
            $table->foreign('entreprises_id')->references('id')->on('entreprises');
            $table->foreign('themes_id')->references('id')->on('themes');
            $table->foreign('Intervenants_id')->references('id')->on('intervenants');
            $table->foreign('etablissements_id')->references('id')->on('etablissements');
        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actions');
    }
};
