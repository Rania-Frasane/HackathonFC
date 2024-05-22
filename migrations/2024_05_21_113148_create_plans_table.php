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
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->integer('exercice')->nullable();
            $table->bigInteger('etablissements_id')->unsigned();
            $table->bigInteger('themes_id')->unsigned();
            $table->integer('nbjours')->nullable();
            $table->integer('nbparticipantmaxi')->nullable();
            $table->float('cout_previsionnel')->nullable();
            $table->integer('status')->nullable();
            $table->timestamps();
            $table->foreign('etablissements_id')->references('id')->on('etablissements');
            $table->foreign('themes_id')->references('id')->on('themes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plans');
    }
};
